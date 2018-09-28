import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import expect from 'expect'
import { mount } from 'enzyme'
import Container from './index'

import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { loadData, url } from '../store/data/actions'
import statuses from '../status.json'
import sampleResponse from './sampleResponse.json'

const El = ({ store }) => (
  <Provider store={store}>
    <Container />
  </Provider>
)

El.propTypes = {
  store: PropTypes.object
}

describe('Container', () => {
  it('Renders correctly', () => {
    const store = configureStore()
    const MountedContainer = mount(<El store={store} />)
    expect(MountedContainer).toMatchSnapshot()
  })

  it('Wait and check if all is good', async () => {
    const store = configureStore()
    const MountedContainer = mount(<El store={store} />)
    await store.dispatch(loadData()) //simulate bootstrap store
    MountedContainer.update()

    const persons = MountedContainer.find('.personTitle')
    expect(persons.length).toBeGreaterThan(1)
  })

  it('Wait and check if all is bad', async () => {
    const client = axios.create()
    const fakeUrl = 'https://radndomuser.me/api/?nat=gb&results=5'
    const store = configureStore()
    const MountedContainer = mount(<El store={store} />)

    await store.dispatch(loadData({ client, url: fakeUrl })) //simulate bootstrap store
    MountedContainer.update()

    expect(store.getState().error).toEqual('Network Error')
  })

  it('Simuatr change person status from left to right', async () => {
    const client = axios.create()
    const mock = new MockAdapter(client)

    mock.onGet(url).reply(() => {
      return [200, sampleResponse]
    })

    const store = configureStore()
    const MountedContainer = mount(<El store={store} />)
    await store.dispatch(loadData({ client })) //simulate bootstrap store
    MountedContainer.update()
    const appliedColum = MountedContainer.find('.' + statuses.applied)
    const persons = appliedColum.find('.card')
    const samplePerson = persons.first()
    const sampleBtn = samplePerson.find('Button')
    sampleBtn.simulate('click')
    MountedContainer.update()
    expect(store.getState().data[0].status).toEqual(statuses.interviewing)
  })

  it('Simuatr change person status from right to left', async () => {
    const client = axios.create()
    const mock = new MockAdapter(client)

    mock.onGet(url).reply(() => {
      return [200, sampleResponse]
    })

    const store = configureStore()
    const MountedContainer = mount(<El store={store} />)
    await store.dispatch(loadData({ client })) //simulate bootstrap store
    MountedContainer.update()
    const appliedColum = MountedContainer.find('.' + statuses.applied)
    const persons = appliedColum.find('.card')
    const samplePerson = persons.first()
    const sampleBtn = samplePerson.find('button')
    sampleBtn.simulate('click')
    MountedContainer.update()

    const interviewingColum = MountedContainer.find('.' + statuses.interviewing)
    const person = interviewingColum.find('.card').first()
    const moveLeftBtn = person.find('Button').find({ text: '<<' })
    moveLeftBtn.simulate('click')
    MountedContainer.update()

    expect(store.getState().data[0].status).toEqual(statuses.applied)
  })
})
