// @flow
import axios from 'axios'
import { SET_DATA } from './types'
import { setError } from '../error/actions'
import { setLoaded } from '../loaded/actions'
import statuses from '../../status.json'

export const url = 'https://randomuser.me/api/?nat=gb&results=5'

export class Api {
  constructor(options = {}) {
    this.client = options.client || axios.create()
    this.url = options.url || url
  }

  loadData() {
    return this.client(this.url).then(({ data }) => data)
  }
}

export function setData(payload) {
  return {
    type: SET_DATA,
    payload
  }
}

export function loadData(apiProvider) {
  return async dispatch => {
    try {
      const api = new Api(apiProvider)
      const data = await api.loadData()

      if (data.results) {
        if (data.results.length) {
          const personsForRedux = data.results.map(item => {
            return {
              status: statuses.applied,
              ...item
            }
          })
          dispatch(setData(personsForRedux))
        } else {
          dispatch(setError('Something wrong'))
        }
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
