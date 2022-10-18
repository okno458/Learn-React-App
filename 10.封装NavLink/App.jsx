import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'//About为路由组件
import Header from './components/Header'//Header为一般组件
import MyNavLink from './components/myNavLink'
/**
   * 
    路由组件与一般组件的区别
      1.写法不同：
          一般组件：<Demo/>
          路由组件：<Route path="/demo" component={Demo}></Route>
      2.存放位置不同
          一般组件放在components文件夹下
          路由组件放在pages文件夹下
      3.接收到的props不同
         一般组件：写标签时传递了什么参数，就能收到什么参数
         路由组件：接收到三个固定的属性
          history:
            go: ƒ go(n)
            goBack: ƒ goBack()
            goForward: ƒ goForward()
            push: ƒ push(path, state)
            replace: ƒ replace(path, state)
        location:
            pathname: "/about"
            search: ""
            state: undefined
        match:
            params: {}
            path: "/about"
            url: "/about"
 */
export default class App extends Component {
  render() {
    return (
      <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Header></Header>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                  {/*
                      NavLink与封装NavLink
                        1.NavLink可以实现路由链接的高亮，可通过activeClassName指定样式名
                        2.标签体内容是一个特殊的标签属性
                        3.通过this.props.children可以获取标签体内容
                   */}
                  <MyNavLink to="/about" a={1} b={2} c={3} children="About"/>
                  <MyNavLink to="/home" children="Home"/>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                </div>
              </div>
            </div>
          </div> 
       </div>
    )
  }
}
