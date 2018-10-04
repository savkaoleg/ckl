// @flow
import { ADD_PERSON, CHANGE_PERSON } from './types'

export function addPerson(data: Object) {
  return {
    type: ADD_PERSON,
    data
  }
}

export function changePerson(uuid: string, status: string) {
  return {
    type: CHANGE_PERSON,
    uuid,
    status
  }
}
