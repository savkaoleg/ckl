import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Person from '../PersonCard'
import './index.scss'
import status from '../../status.json'

const getFilteredPersons = (persons, filter) => {
  return persons.filter(p => p.status === filter)
}

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const applied = getFilteredPersons(data, status.applied)
    const interviewing = getFilteredPersons(data, status.interviewing)
    const hired = getFilteredPersons(data, status.hired)
    return (
      <div className="row">
        <div className="column">
          <h2>{status.applied}</h2>
          <div>
            {applied.map(person => (
              <Person
                key={person.login.uuid}
                data={person}
                changeStatus={this.props.changeStatus}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <h2>{status.interviewing}</h2>
          <div>
            {interviewing.map(person => (
              <Person
                key={person.login.uuid}
                data={person}
                changeStatus={this.props.changeStatus}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <h2>{status.hired}</h2>
          <div>
            {hired.map(person => (
              <Person
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

Layout.propTypes = {
  changeStatus: PropTypes.func,
  data: PropTypes.array
}

export default Layout
