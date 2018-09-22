import { ADD_PERSON, CHANGE_PERSON } from './types'

export function addPerson(data) {
  return {
    type: ADD_PERSON,
    data
  }
}

export function changePerson(uuid, status) {
  return {
    type: CHANGE_PERSON,
    uuid,
    status
  }
}
