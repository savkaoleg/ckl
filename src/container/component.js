import React, { Component } from 'react'
import Loader from '../components/Loader'
import Card from '../components/Card'
import Layout from '../components/Layout'

class Home extends Component {
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

export default Home
