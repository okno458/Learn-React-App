import React, { Component } from 'react'
import {Link,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

/*
  路由的基本使用
    1.明确好页面的导航区和展示区
    2.导航区的a标签为link标签
     <Link to="/xxxx">xxxx</Link>
    3.展示区写Route标签进行路径的匹配
      <Route path="xxxx" component={xxxx}></Route>
    4.要在App组件外侧包裹 <BrowserRouter>或<HashRouter>,
*/
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                  {/* 原生html中靠a标签跳转到不同的页面 */}
                  {/* <a className="list-group-item active" href="./about.html">About</a>
                  <a className="list-group-item" href="./home.html">Home</a> */}
                  {/* 在react中靠路由链接实现切换组件 */}
                    <Link to="/about" className="list-group-item">About</Link>
                    <Link to="/home" className="list-group-item">Home</Link>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                    {/* 注册路由 */}
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
