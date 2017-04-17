/**
 * Created by hesy on 2016/10/17.
 */

import React,{Component,PropsTypes} from 'react'

export default class Footer extends Component{
  renderFilter(filter,name){
    //判断现在过滤条件是什么
    if(filter === this.props.filter){
      return name
    }
    //绑定过滤条件事件,返回元素,发送action
    return (
      <a href="#" onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  render(){
    return (
      <p>
        Show:{' '}
        {this.renderFilter('SHOW_ALL','ALL')}
        {','}
        {this.renderFilter('SHOW_COMPLETED','Completed')}
        {','}
        {this.renderFilter('SHOW_ACTION','Active')}
        .
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange:PropsTypes.func.isRequired,
  filter:PropsTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}