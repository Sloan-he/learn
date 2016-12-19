/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'
import FootLink from './FootLink'

class Foot extends Component{
  render(){
    const {filter} = this.props
    return(
      <div>
      	Show:{' '}
      	<FootLink filter={filter} content={'All'} />&nbsp;
      	<FootLink filter={filter} content={'Active'} />&nbsp;
      	<FootLink filter={filter} content={'Completed'} />
      </div>
    )
  }
}

Foot.propsTypes = {
  filter:PropTypes.string.isRequired
}

export default Foot
