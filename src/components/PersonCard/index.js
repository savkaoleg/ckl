// @flow
import React, { Component } from 'react'
import Button from '../Button'
import statuses from '../../statuses'
import './index.scss'

type Props = {
  changeStatus: Function,
  data: PersonType
}

class PersonCard extends Component<Props> {
  constructor(props: Object) {
    super(props)
  }

  moveLeft = () => {
    let nextStatus: string
    if (statuses.hired === this.props.data.status) {
      nextStatus = statuses.interviewing
    }
    if (statuses.interviewing === this.props.data.status) {
      nextStatus = statuses.applied
    }
    this.props.changeStatus(this.props.data.login.uuid, nextStatus)
  }

  moveRigt = () => {
    let nextStatus: string
    if (statuses.applied === this.props.data.status) {
      nextStatus = statuses.interviewing
    }
    if (statuses.interviewing === this.props.data.status) {
      nextStatus = statuses.hired
    }
    this.props.changeStatus(this.props.data.login.uuid, nextStatus)
  }

  skeletonName = <span className="skeleton">________________</span>

  renderCard(
    name: mixed = this.skeletonName,
    picture: string = '',
    personStatus: string = ''
  ) {
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
          if (personStatus !== statuses.applied) {
            return <Button text="<<" onClick={this.moveLeft} raised primary />
          }
        })()}
        {(() => {
          if (personStatus !== statuses.hired) {
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

export default PersonCard
