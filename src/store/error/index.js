import { ERROR_CHANGE } from './types'

export default function error(state = '', action) {
  const { type, errorMsg } = action
  switch (type) {
    case ERROR_CHANGE:
      return errorMsg
    default:
      return state
  }
}
