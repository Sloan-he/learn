import React from 'react'
import About from './About'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
    <About />
	{this.props.children}
    </div>
  }
})
