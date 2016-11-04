/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component} from 'react'
import Link from './Link'

class Foot extends Component{
  render(){
    return(
      <div>
      	Show:{' '}
      	<Link {...{filter:'SHOW_ALL',content:'All'}} />
      	<Link {...{filter:'SHOW_ACTIVE',content:'Active'}} />
      	<Link {...{filter:'SHOW_COMPLETED',content:'Completed'}} />
      </div>
    )
  }
}

export default Foot
