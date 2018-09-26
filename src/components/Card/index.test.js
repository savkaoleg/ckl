import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Card from './index'

describe('Card', () => {
  it('Renders correctly', () => {
    const component = shallow(<Card />)

    expect(component).toMatchSnapshot()
  })
})
