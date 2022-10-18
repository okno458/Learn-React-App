import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'}
    ],
  }
  /**
   * 
      编程式路由导航
       借助this.props.history对象上的api对路由进行前进，后退等操作
       this.props.history.replace() 跳转页面且不留下痕迹
       this.props.history.push()  跳转页面留下痕迹
       this.props.history.goBack() 后退至前一个页面
       this.props.history.goForward() 前进至下一个页面
       this.props.history.go() 前进或后退n个页面，n为正数时前进，n为负数时后退
   */
  replaceShow = (id,title) => {
    //replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
    
    //replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`,{id,title})
  }
  pushShow = (id,title) => {
    //push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    
    //push跳转+携带search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    
    //replace跳转+携带state参数
    this.props.history.push(`/home/message/detail`,{id,title})
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(2)
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <div>
          <ul>
            {
              messageArr.map(msgObj => {
                  return (
                    <li key={msgObj.id}>
                      {/* 
                        向路由组件传递params参数 
                      */}
                      {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                   
                      {/* 
                        向路由组件传递search参数 
                      */}
                      <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                      {/* 
                        向路由组件传递state参数 
                       */}
                      {/* <Link replace={true} to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp;  */}
                      <button onClick={() => this.pushShow(msgObj.id,msgObj.title)}>push查看</button>&nbsp;&nbsp;
                      <button onClick={() => this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>&nbsp;&nbsp;
                    </li>
                  )
              })
            }
          </ul>
          <hr/>
          {/* 声明接收params参数 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
          {/* search参数无需声明接收，正常注册路由即可 */}
          <Route path="/home/message/detail" component={Detail}></Route>
          {/* state参数无需声明接收，正常注册路由即可 */}
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}
          <button onClick={this.back}>回退</button> 
          <button onClick={this.forward}>前进</button> 
          <button onClick={this.go}>go</button> 
        </div>
      </div>
    )
  }
}
