// @flow
import { ERROR_CHANGE } from './types'

export function setError(errorMsg) {
  return {
    type: ERROR_CHANGE,
    errorMsg
  }
}
