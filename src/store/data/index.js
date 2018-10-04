// @flow
import { SET_DATA } from './types'
import { ADD_PERSON, CHANGE_PERSON } from '../person/types'
import person from '../person/index'

export default function data(state: Array<PersonType> = [], action) {
  const { type, payload } = action
  switch (type) {
    case ADD_PERSON:
      return [...state, person({}, action)]
    case CHANGE_PERSON:
      return state.map(personItem => person(personItem, action))
    case SET_DATA:
      return payload
    default:
      return state
  }
}
