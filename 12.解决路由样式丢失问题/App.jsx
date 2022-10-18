import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'//About为路由组件
import Header from './components/Header'//Header为一般组件
import MyNavLink from './components/myNavLink'


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
                    解决多级路径刷新页面样式丢失的问题
                      1.在index.html页面中 引入样式时把路径./改为/ 
                      2.在index.html页面中 引入样式时把路径./改为%PUBLIC_URL%
                      3.使用HashRouter
                */}
                  <MyNavLink to="/atguigu/about" a={1} b={2} c={3} children="About"/>
                  <MyNavLink to="/atguigu/home" children="Home"/>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    <Route path="/atguigu/about" component={About}></Route>
                    <Route path="/atguigu/home" component={Home}></Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div> 
       </div>
    )
  }
}
