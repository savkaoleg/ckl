import React from 'react'
import './index.scss'

const Card = ({ text, title }) => (
  <div className="card">
    <h2 className="title">{title}</h2>
    <p>{text}</p>
  </div>
)

export default Card
