/**
 * Created by hesy on 2016/12/1.
 */
import React,{PropTypes,Component} from 'react'

export default class Picker extends Component{
  render(){
    const {lastUpdated,isFetching,options} = this.props
    return (
     <div className="">
       <select name="" id="">
         {options.map((option,i) => <option key={i} value={option}>{option}</option>)}
       </select>
      {!isFetching && <p>Last updated at {new Date(lastUpdated).toLocaleTimeString()},<a href="">Refresh</a></p>}
     </div>
    )
  }
}

Picker.propTypes = {
  lastUpdated:PropTypes.number.isRequired,
  isFetching:PropTypes.bool.isRequired,
  options:PropTypes.array.isRequired,
}
