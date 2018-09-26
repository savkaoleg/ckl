import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Layout from './index'
import sampleData from './sampleData.json'

describe('Layout', () => {
  it('Renders correctly without props', () => {
    const component = shallow(<Layout />)
    expect(component).toMatchSnapshot()
  })

  it('Renders correctly with props', () => {
    const component = shallow(<Layout data={sampleData} />)
    expect(component.find('PersonCard').length).toEqual(sampleData.length)
  })
})
