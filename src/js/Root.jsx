import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

export default class Root extends Component {
  static propTypes = {
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired,
  }

  get content() {
    const { routes } = this.props

    return (
      <Router>
        {routes}
      </Router>
    )
  }

  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        {this.content}
      </Provider>
    )
  }
}