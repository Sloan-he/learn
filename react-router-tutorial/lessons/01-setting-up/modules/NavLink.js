// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
  	// console.log(this.props)
    return <Link {...this.props} activeClassName="active"/>
  }
})
