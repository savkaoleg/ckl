import expect from 'expect'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import reducer from './index'
import { addPerson, changePerson } from '../person/actions'
import { setData, loadData, Api, url } from './actions'
import statuses from '../../status.json'
import sampleResponse from './sampleResponse.json'
import sampleBadResponse from './sampleBadResponse.json'
import sampleAnotherBadResponse from './sampleAnotherBadResponse.json'

const initialState = []
const sampleUuid = '123'

describe('stote > data > reducer', () => {
  it('addPerson', () => {
    const data = {
      name: 'Ivan',
      age: 19
    }
    const next = reducer(initialState, addPerson(data))
    expect(next[0]).toEqual({ status: statuses.applied, ...data })
  })

  it('setData', () => {
    const data = [
      { status: statuses.applied, gender: 'male' },
      { status: statuses.interviewing, gender: 'female' }
    ]

    const next = reducer(initialState, setData(data))
    expect(next).toEqual(data)
  })

  it('changePerson', () => {
    const data = [
      {
        login: {
          uuid: sampleUuid
        },
        status: statuses.applied
      }
    ]

    const next = reducer(data, changePerson(sampleUuid, statuses.interviewing))

    expect(next[0]).toEqual({ ...data[0], status: statuses.interviewing })
  })

  it('loadData', async () => {
    const client = axios.create()
    const mock = new MockAdapter(client)
    const api = new Api({ client })

    mock.onGet(url).reply(() => {
      return [200, sampleResponse]
    })

    await api.loadData()

    expect(mock.history.get.length).toEqual(1)
  })

  it('loadDataSuccess', async () => {
    const mockStore = configureStore([thunkMiddleware])
    const store = mockStore(initialState)

    await store.dispatch(loadData())

    const actions = store.getActions() //?
    console.log(actions[1])
    expect(actions[1]).toEqual({ type: 'LOADED_CHANGE', loadedVal: true })
    expect(actions[0]).toHaveProperty('type', 'SET_DATA')
  })

  it('loadDataUnSuccess (bad url)', async () => {
    const client = axios.create()
    const fakeUrl = 'https://radndomuser.me/api/?nat=gb&results=5'

    const mockStore = configureStore([thunkMiddleware])
    const store = mockStore(initialState)

    await store.dispatch(loadData({ client, url: fakeUrl }))

    const actions = store.getActions() //?
    expect(actions[0]).toHaveProperty('type', 'ERROR_CHANGE')
  })

  it('loadDataUnSuccess (bad response)', async () => {
    const client = axios.create()
    const fakeUrl = 'https://radndomuser.me/api/?nat=gb&results=5'
    const mock = new MockAdapter(client)

    mock.onGet(fakeUrl).reply(() => {
      return [200, sampleBadResponse]
    })

    const mockStore = configureStore([thunkMiddleware])
    const store = mockStore(initialState)

    await store.dispatch(loadData({ client, url: fakeUrl }))

    const actions = store.getActions() //?
    expect(actions[0]).toHaveProperty('type', 'ERROR_CHANGE')
  })

  it('loadDataUnSuccess (bad response)', async () => {
    const client = axios.create()
    const fakeUrl = 'https://radndomuser.me/api/?nat=gb&results=5'
    const mock = new MockAdapter(client)

    mock.onGet(fakeUrl).reply(() => {
      return [200, sampleAnotherBadResponse]
    })

    const mockStore = configureStore([thunkMiddleware])
    const store = mockStore(initialState)

    await store.dispatch(loadData({ client, url: fakeUrl }))

    const actions = store.getActions() //?
    expect(actions[0]).toHaveProperty('type', 'ERROR_CHANGE')
  })
})
