import React from 'react'

export default React.createClass({
  render() {
  	console.log(this.props.params.id)
    return <h1>About Message</h1>  
}
})
