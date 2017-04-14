/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component} from 'react'


export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      company:'',
      adress:'',
      scale:'',
      contacts:'',
      phone:'',
      email:''
    }
  }
  handleChange = (e) =>{
    switch(e.target.id){
      case 'company':
        this.setState({company:e.target.value.trim()})
        break
      case 'adress':
        this.setState({adress:e.target.value.trim()})
        break
      case 'scale':
        this.setState({scale:e.target.value.trim()})
        break 
      case 'contacts':
        this.setState({contacts:e.target.value.trim()})
        break
      case 'phone':
        this.setState({phone:e.target.value.trim()})
        break
      case 'email':
        this.setState({email:e.target.value.trim()})
        break
      default: return ''        
    }
  }
  regetInput = () =>{
    var companyReg = /^[\u4E00-\u9FA5A-Za-z0-9]{1,40}$/
    var adressReg = /^[\u4E00-\u9FA5A-Za-z0-9]{1,100}$/
    var phoneReg = /^(13[0-9]|17[0|6|7|8]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    var mailReg = /^[A-Za-z0-9]+([-_]\w+)*@([[\w]{1}|A-Za-z])*\.\w+([.]\w+)*$/
    const {company,adress,scale,contacts,phone,email} = this.state
    // if(company.length === 0){
    //   alert('请输入公司名')
    //   return
    // }
    // if(!companyReg.test(company)){
    //   alert('请输入正确公司名字,长度在40个字内')
    //   return
    // }
    // if(adress.length === 0){
    //   alert('请输入地址')
    //   return
    // }
    // if(!adressReg.test(adress)){
    //   alert('请输入正确地址')
    //   return
    // }
    // if(scale.length === 0){
    //   alert('请输入采购规模')
    //   return
    // }
    // if(contacts.length === 0){
    //   alert('请输入联系人名字')
    //   return
    // }
    // if(phone.length === 0){
    //   alert('请输入联系人电话')
    //   return
    // }
    // if(!phoneReg.test(phone)){
    //   alert('请输入正确联系人电话')
    //   return
    // }
    if(email.length === 0){
      alert('请输入联系人邮箱')
      return
    }
    if(!mailReg.test(email)){
      alert('请输入正确联系人邮箱')
      return
    }
    alert('ok')
  }
  render(){
<<<<<<< HEAD
    const {params} = this.props
    console.log(this.props.params)
=======
>>>>>>> 0ebbc4e88cc9cac38d841e7d85dc0ad1b43af3e7
    return (
      <div>
        <p><input id="company" placeholder="公司名" onChange={this.handleChange} /></p>
        <p><input id="adress" placeholder="地址"  onChange={this.handleChange} /></p>
        <p><input id="scale" placeholder="规模"  onChange={this.handleChange} /></p>
        <p><input id="contacts" placeholder="联系人" onChange={this.handleChange} /></p>
        <p><input id="phone" placeholder="联系电话" onChange={this.handleChange} /></p>
        <p><input id="email" placeholder="邮箱"  onChange={this.handleChange} /></p>
        <button type="button" onClick={this.regetInput}>提交</button>
      </div>
    )
  }
}


