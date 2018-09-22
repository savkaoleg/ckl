import { LOADED_CHANGE } from './types'

export default function loaded(state = false, action) {
  const { type, loadedVal } = action
  switch (type) {
    case LOADED_CHANGE:
      return loadedVal
    default:
      return state
  }
}
