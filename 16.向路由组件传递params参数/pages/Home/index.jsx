import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from "../../components/myNavLink";
import News from "./News"
import Message from "./Message"
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">news</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">message</MyNavLink>
            </li>
          </ul>
          <Switch>
            {/* 
                嵌套路由
                  1.注册子路由时要加上父路由的path值
                  2.路由的匹配是按照注册路由的顺序进行的
            */}
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
      </div>
    )
  }
}
