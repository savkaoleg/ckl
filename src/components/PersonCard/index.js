import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import status from '../../status.json'
import './index.scss'

class PersonCard extends Component {
  constructor(props) {
    super(props)
  }

  moveLeft = () => {
    let nextStatus
    if (status.hired === this.props.data.status) {
      nextStatus = status.interviewing
    }
    if (status.interviewing === this.props.data.status) {
      nextStatus = status.applied
    }
    this.props.changeStatus(this.props.data.login.uuid, nextStatus)
  }

  moveRigt = () => {
    let nextStatus
    if (status.applied === this.props.data.status) {
      nextStatus = status.interviewing
    }
    if (status.interviewing === this.props.data.status) {
      nextStatus = status.hired
    }
    this.props.changeStatus(this.props.data.login.uuid, nextStatus)
  }

  skeletonName = <span className="skeleton">________________</span>

  renderCard(name = this.skeletonName, picture = '', personStatus = '') {
    return (
      <div className="card">
        <div className="personTitle">
          {(() => {
            if (picture) {
              return <img src={picture} />
            } else {
              return <img className="skeleton" />
            }
          })()}
          {name}
        </div>
        {(() => {
          if (personStatus !== status.applied) {
            return <Button text="<<" onClick={this.moveLeft} raised primary />
          }
        })()}
        {(() => {
          if (personStatus !== status.hired) {
            return <Button text=">>" onClick={this.moveRigt} raised primary />
          }
        })()}
      </div>
    )
  }

  render() {
    const { data } = this.props
    if (data && data.name) {
      const { title, first, last } = data.name
      const name = `${title} ${first} ${last}`

      return this.renderCard(name, data.picture.thumbnail, data.status)
    } else {
      return this.renderCard()
    }
  }
}

PersonCard.propTypes = {
  changeStatus: PropTypes.func,
  data: PropTypes.object
}

export default PersonCard
