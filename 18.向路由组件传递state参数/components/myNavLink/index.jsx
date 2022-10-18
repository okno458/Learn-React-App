import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return (
      <div>
        <NavLink {...this.props} className="list-group-item" activeClassName="atguigu"/>
      </div>
    )
  }
}
