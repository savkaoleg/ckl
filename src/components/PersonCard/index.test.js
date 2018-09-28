import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import PersonalCard from './index'
import sampleData from './sampleData.json'
import statuses from '../../status.json'

describe('PersonalCard', () => {
  it('Renders correctly without props', () => {
    const component = shallow(<PersonalCard />)
    expect(component).toMatchSnapshot()
  })

  it('moveRight btn exist with applied status', () => {
    const component = shallow(<PersonalCard data={sampleData} />)
    const btn = component.find('Button').find({ text: '>>' })
    expect(btn.length).toEqual(1)
  })

  it('moveLeft btn does not exist with applied status', () => {
    const component = shallow(<PersonalCard data={sampleData} />)
    const btn = component.find('Button').find({ text: '<<' })
    expect(btn.length).toEqual(0)
  })

  it('Both btn exist with interviewing status', () => {
    const modifiedSampleData = { ...sampleData, status: statuses.interviewing }
    const component = shallow(<PersonalCard data={modifiedSampleData} />)
    const btn = component.find('Button')
    expect(btn.length).toEqual(2)
  })

  it('moveRight btn does not exist with hired status', () => {
    const modifiedSampleData = { ...sampleData, status: statuses.hired }
    const component = shallow(<PersonalCard data={modifiedSampleData} />)
    const btn = component.find('Button').find({ text: '>>' })
    expect(btn.length).toEqual(0)
  })

  it('moveLeft btn exist with hired status', () => {
    const modifiedSampleData = { ...sampleData, status: statuses.hired }
    const component = shallow(<PersonalCard data={modifiedSampleData} />)
    const btn = component.find('Button').find({ text: '<<' })
    expect(btn.length).toEqual(1)
  })
})
