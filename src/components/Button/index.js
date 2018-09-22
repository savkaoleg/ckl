import React from 'react'
import './index.scss'

const Button = ({ text, onClick, raised, primary, warn }) => (
  <button
    type="button"
    className={`md-btn md-btn-ripple ${raised ? 'md-btn-raised' : ''} ${
      primary ? 'md-btn-primary' : ''
    } ${warn ? 'md-btn-warn' : ''}`}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
