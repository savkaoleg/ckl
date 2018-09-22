import expect from 'expect'
import reducer from './index'
import { setLoaded } from './actions'

const initialState = false

describe('stote > loaded > reducer', () => {
  it('setError', () => {
    const data = true
    const next = reducer(initialState, setLoaded(data))

    expect(next).toEqual(data)
  })

  it('Invented Action', () => {
    const data = false
    const next = reducer(initialState, { type: 'SOME_ACTION' })

    expect(next).toEqual(data)
  })
})
