import { ADD_PERSON, CHANGE_PERSON } from './types'
import statuses from '../../status.json'

export default function person(state = {}, action) {
  const { type, status, data, uuid } = action
  switch (type) {
    case ADD_PERSON:
      return {
        status: statuses.applied,
        ...data
      }
    case CHANGE_PERSON:
      if (state.login.uuid === uuid) {
        return Object.assign({}, state, {
          status: status
        })
      }
      return state
    default:
      return state
  }
}
