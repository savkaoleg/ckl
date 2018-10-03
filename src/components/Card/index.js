// @flow
import React from 'react'
import './index.scss'

const Card = ({ text, title }: { text: string, title: string }) => (
  <div className="card">
    <h2 className="title">{title}</h2>
    <p>{text}</p>
  </div>
)

export default Card
