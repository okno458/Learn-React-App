import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
/*
    github搜索案例相关知识点
      1.设计状态是要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办
      2.ES6知识点 解构赋值加重命名
        let obj = {a:{b:1}}
        const {a} = obj //传统解构赋值
        const {a:{b}} = obj //连续解构赋值
        const {a:{b：value}} = obj //连续解构赋值加重命名
      3.消息订阅与发布机制
        (1).先订阅，再发布
        (2).适用于任意组件间通信
        (3).要在组件的componentWillUnmount中取消订阅
      4.fetch发送请求(关注分离的设计思想)
        try {
            const resp = await fetch(`https://api.github.com/search/users?q=${keyword}`)
            const data = await resp.json();
          
        } catch (error) {
            console.log(error)
        }
*/ 
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search></Search>
        <List></List>
     </div>
    )
  }
}

