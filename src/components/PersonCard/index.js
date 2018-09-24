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

  render() {
    const { data } = this.props
    const { title, first, last } = data.name
    const name = `${title} ${first} ${last}`
    return (
      <div className="card">
        <div className="personTitle">
          <img src={data.picture.thumbnail} />
          {name}
        </div>
        {(() => {
          if (data.status !== status.applied) {
            return <Button text="<<" onClick={this.moveLeft} raised primary />
          }
        })()}
        {(() => {
          if (data.status !== status.hired) {
            return <Button text=">>" onClick={this.moveRigt} raised primary />
          }
        })()}
      </div>
    )
  }
}

PersonCard.propTypes = {
  changeStatus: PropTypes.func,
  data: PropTypes.object
}

export default PersonCard
