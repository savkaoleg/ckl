import { SET_DATA } from './types'
import { setError } from '../error/actions'
import { setLoaded } from '../loaded/actions'
import { addPerson } from '../person/actions'
import statuses from '../../status.json'

export function setData(payload) {
  return {
    type: SET_DATA,
    payload
  }
}

export function loadData() {
  return async (dispatch: Function) => {
    try {
      const response = await fetch(
        'https://randomuser.me/api/?nat=gb&results=5'
      )
      const result = await response.json()

      if (result.results.length) {
        const personsForRedux = result.results.map(item => {
          return {
            status: statuses.applied,
            ...item
          }
        })
        dispatch(setData(personsForRedux))
      } else {
        dispatch(setError('Something wrong'))
      }
      dispatch(setLoaded(true))
    } catch (e) {
      console.log('e', e)
      dispatch(setError(e.message))
      dispatch(setLoaded(true))
    }
  }
}
