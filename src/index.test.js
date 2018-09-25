import React from 'react'
import ReactDOM from 'react-dom'
import { render } from './index'

it('render without crashing', () => {
  const div = document.createElement('div')
  render()
  ReactDOM.unmountComponentAtNode(div)
})
