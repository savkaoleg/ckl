// @flow

import { connect } from 'react-redux'
import Component from './component'
import { changePerson } from '../store/person/actions'

const mapStateToProps = (state: Object) => {
  return {
    error: state.error,
    data: state.data,
    loaded: state.loaded
  }
}

const mapDispatchToProps = dispatch => ({
  changeStatus(uuid, status) {
    dispatch(changePerson(uuid, status))
  }
})

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
