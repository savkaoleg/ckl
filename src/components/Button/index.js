import React from 'react'
import PropTypes from 'prop-types'
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

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  raised: PropTypes.bool,
  text: PropTypes.string,
  warn: PropTypes.bool
}

export default Button
