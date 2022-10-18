import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from "../../components/myNavLink";
import News from "../Home/News"
import Message from "../Home/Message"
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
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
      </div>
    )
  }
}
