import { LOADED_CHANGE } from './types'

export function setLoaded(loadedVal: boolean) {
  return {
    type: LOADED_CHANGE,
    loadedVal
  }
}
