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
  /*
    总结
    向路由组件传递参数
      1.params参数
        路由链接(携带参数)：<Link to={`/home/message/detail/18`}>{msgObj.title}</Link>
        注册路由(声明接收)：<Route path="/home/message/detail/:id/" component={Detail}></Route>
        接收参数：const {id} = this.props.match.params;
      2.search参数
        路由链接(携带参数)：<Link to={`/home/message/detail/?name=tom&age=18`}></Link>
        注册路由(无需声明，正常注册即可)：<Route path="/home/message/detail" component={Detail}></Route>
        接收参数：this.props.location.search;
        备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
      3.state参数
        路由链接(携带参数):<Link to={{pathname:'/home/message/detail',state:{name:tom,age:18}}}></Link>
        注册路由(无需声明，正常注册即可)：<Route path="/home/message/detail" component={Detail}></Route>
        接收参数：this.props.location.state;
        备注：刷新后也可以保留参数
  */
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
                      {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                      {/* 
                        向路由组件传递state参数 
                       */}
                      <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp; 
                    </li>
                  )
              })
            }
          </ul>
          <hr/>
          {/* 声明接收params参数 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
          {/* search参数无需声明接收，正常注册路由即可 */}
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}
          {/* state参数无需声明接收，正常注册路由即可 */}
           <Route path="/home/message/detail" component={Detail}></Route>
        </div>
      </div>
    )
  }
}
