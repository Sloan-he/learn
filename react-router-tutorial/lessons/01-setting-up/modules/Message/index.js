import React from 'react'
import About from './About'

export default React.createClass({
  render() {
  	console.log(this.props.location.pathname)
    return <h1>Message</h1>  
}
})
