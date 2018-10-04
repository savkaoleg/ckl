// @flow
import React, { Component } from 'react'
import PersonCard from '../PersonCard'
import './index.scss'
import status from '../../statuses'

export const getFilteredPersons = (
  persons: Array<PersonType> = [],
  filter: string = ''
) => {
  if (persons.length) {
    return (persons.filter(p => p.status === filter): Array<PersonType>)
  } else {
    return []
  }
}

type Props = {
  changeStatus: Function,
  data: Array<any>
}

class Layout extends Component<Props> {
  constructor(props: Object) {
    super(props)
  }

  render() {
    const { data } = this.props
    const applied = getFilteredPersons(data, status.applied)
    const interviewing = getFilteredPersons(data, status.interviewing)
    const hired = getFilteredPersons(data, status.hired)
    return (
      <div className="row">
        <div className={`column ${status.applied}`}>
          <h2>{status.applied}</h2>
          <div>
            {applied.map(person => (
              <PersonCard
                key={person.login.uuid}
                data={person}
                changeStatus={this.props.changeStatus}
              />
            ))}
          </div>
        </div>
        <div className={`column ${status.interviewing}`}>
          <h2>{status.interviewing}</h2>
          <div>
            {interviewing.map(person => (
              <PersonCard
                key={person.login.uuid}
                data={person}
                changeStatus={this.props.changeStatus}
              />
            ))}
          </div>
        </div>
        <div className={`column ${status.hired}`}>
          <h2>{status.hired}</h2>
          <div>
            {hired.map(person => (
              <PersonCard
                key={person.login.uuid}
                data={person}
                changeStatus={this.props.changeStatus}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
