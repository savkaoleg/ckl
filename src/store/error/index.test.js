import expect from 'expect'
import reducer from './index'
import { setError } from './actions'

const initialState = ''
const data = 'Some Error'

describe('stote > error > reducer', () => {
  it('setError', () => {
    const next = reducer(initialState, setError(data))

    expect(next).toEqual(data)
  })

  it('removeError', () => {
    const next = reducer(initialState, setError(''))

    expect(next).toEqual('')
  })

  it('Invented Action', () => {
    const next = reducer(initialState, { type: 'SOME_ACTION' })

    expect(next).toEqual('')
  })
})
