import expect from 'expect'
import reducer from './index'
import { addPerson, changePerson } from './actions'
import statuses from '../../status.json'

const sampleUuid = '123'
const sampleUuidTwo = '124'
const initialState = {
  login: {
    uuid: sampleUuid
  },
  status: statuses.applied
}

describe('stote > person > reducer', () => {
  it('addPerson', () => {
    const data = {
      name: 'Ivan',
      age: 19
    }
    const next = reducer(initialState, addPerson(data))

    expect(next).toEqual({ ...data, status: statuses.applied })
  })

  it('changePersonWithWalidUuid', () => {
    const data = {
      login: {
        uuid: sampleUuid
      },
      status: statuses.applied
    }
    const next = reducer(
      initialState,
      changePerson(sampleUuid, statuses.interviewing)
    )

    expect(next).toEqual({ ...data, status: statuses.interviewing })
  })

  it('changePersonWithInWalidUuid', () => {
    const data = {
      login: {
        uuid: sampleUuid
      },
      status: statuses.applied
    }
    const next = reducer(
      initialState,
      changePerson(sampleUuidTwo, statuses.interviewing)
    )

    expect(next).toEqual(data)
  })

  it('Invented Action', () => {
    const next = reducer(initialState, { type: 'SOME_ACTION' })

    expect(next).toEqual(initialState)
  })
})
