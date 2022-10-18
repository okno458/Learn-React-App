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
                  <MyNavLink to="/about" a={1} b={2} c={3} children="About"/>
                  <MyNavLink to="/home" children="Home"/>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    {/* 
                      路由的严格匹配与模糊匹配
                        1.默认使用的是模糊匹配，(简单记：输入的路径必须要包含匹配的路径，且顺序要一致)
                        2.开启严格匹配：添加exact={true}
                        3.严格模式尽量不随便开启，有需要的时候再开，有些时候开启会导致无法继续匹配二级路由
                    
                    */}
                    <Route path="/about" component={About} exact></Route>
                    <Route path="/home" component={Home} exact></Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div> 
       </div>
    )
  }
}
