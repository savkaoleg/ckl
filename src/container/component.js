// @flow

import React from 'react'
import Loader from '../components/Loader'
import Card from '../components/Card'
import Layout from '../components/Layout'

type Props = {
  changeStatus: Function,
  data: Array<any>,
  error: string,
  loaded: boolean
}

class Component extends React.Component<Props> {
  constructor(props: Object) {
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
export default Component
