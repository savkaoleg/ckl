import { loadData } from '../store/data/actions'

export default function bootstrap({ dispatch }) {
  return () => {
    dispatch(loadData())
  }
}
