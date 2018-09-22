import expect from 'expect'
import reducer from './index'
import { addPerson, changePerson } from './actions'
import statuses from '../../status.json'

const samleUuid = '123'
const samleUuidTwo = '124'
const initialState = {
  login: {
    uuid: samleUuid
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
        uuid: samleUuid
      },
      status: statuses.applied
    }
    const next = reducer(
      initialState,
      changePerson(samleUuid, statuses.interviewing)
    )

    expect(next).toEqual({ ...data, status: statuses.interviewing })
  })

  it('changePersonWithInWalidUuid', () => {
    const data = {
      login: {
        uuid: samleUuid
      },
      status: statuses.applied
    }
    const next = reducer(
      initialState,
      changePerson(samleUuidTwo, statuses.interviewing)
    )

    expect(next).toEqual(data)
  })

  it('Invented Action', () => {
    const next = reducer(initialState, { type: 'SOME_ACTION' })

    expect(next).toEqual(initialState)
  })
})
