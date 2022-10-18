import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取学生数据</button>
        <button onClick={this.getCarData}>点击获取汽车数据</button>
      </div>
    )
  }
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(res => {
      console.log('成功了', res.data)
    },reason => {
      console.log('失败了',reason)
    })
  }
  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(res => {
      console.log('成功了', res.data)
    },reason => {
      console.log('失败了',reason)
    })
  }
}
