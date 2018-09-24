import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Card = ({ text, title }) => (
  <div className="card">
    <h2 className="title">{title}</h2>
    <p>{text}</p>
  </div>
)

Card.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
}

export default Card
