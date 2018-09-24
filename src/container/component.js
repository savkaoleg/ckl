import React from 'react'
import PropTypes from 'prop-types'
import Loader from '../components/Loader'
import Card from '../components/Card'
import Layout from '../components/Layout'

class Component extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { loaded, error, data } = this.props

    if (loaded) {
      if (!error) {
        return <Layout data={data} changeStatus={this.props.changeStatus} />
      } else {
        return <Card title="Error" text={error} />
      }
    } else {
      return <Loader text="Loading ..." />
    }
  }
}

Component.propTypes = {
  changeStatus: PropTypes.func,
  data: PropTypes.array,
  error: PropTypes.string,
  loaded: PropTypes.bool
}

export default Component
