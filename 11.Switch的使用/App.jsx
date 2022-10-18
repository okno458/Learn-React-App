import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'//About为路由组件
import Header from './components/Header'//Header为一般组件
import MyNavLink from './components/myNavLink'
import Text from './pages/Text'

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
                  <MyNavLink to="/about" a={1} b={2} c={3} children="About"/>
                  <MyNavLink to="/home" children="Home"/>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 
                    Switch的使用
                      1.通常情况下，path和component是一一对应的关系
                      2.Switch可以提高路由匹配效率（单一匹配）
                  */}
                  <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/home" component={Text}></Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div> 
       </div>
    )
  }
}
