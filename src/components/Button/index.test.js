import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Button from './index'

describe('Button', () => {
  it('Renders correctly', () => {
    const component = shallow(<Button />)

    expect(component).toMatchSnapshot()
  })

  it('raised prop', () => {
    const component = shallow(<Button raised />)
    expect(component.hasClass('md-btn-raised')).toEqual(true)
  })

  it('primary prop', () => {
    const component = shallow(<Button primary />)
    expect(component.hasClass('md-btn-primary')).toEqual(true)
  })

  it('primary warn', () => {
    const component = shallow(<Button warn />)
    expect(component.hasClass('md-btn-warn')).toEqual(true)
  })
})
