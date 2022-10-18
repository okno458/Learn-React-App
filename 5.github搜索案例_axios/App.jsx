import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  //初始化状态，
  state = {
    users:[],//user初始值为数组
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//标识是否处于加载中
    err:''//存储请求相关的错误信息
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <List {...this.state}></List>
     </div>
    )
  }
  //更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
}

