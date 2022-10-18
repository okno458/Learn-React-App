//创建“外壳”组件App
import React, {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
/*
    todoList案例相关知识点：
      1.拆分组件，实现静态组件，注意className,style的写法
      2.动态初始化列表，如何确定将数据放在哪个组件的state中？
        -某个组件使用，放在其自身的state中
        -某些组件使用，放在他们共通的父组件state中（官方成此操作为状态提升）
      3.关于父子组件之间通信
        父组件给子组件传递数据，通过props传递
        子组件给父组件传递数据，通过props传递，需要父提前给子传递一个函数
      4.注意defaultChecked和checked的区别
        defaultChecked只有在第一次指定的时候才会起作用
      5.状态在哪里，操作状态的方法就在哪里  

*/
export default class App extends Component {
  state = {
    todos:[
      {id:'001',name:'eat',done:true},
      {id:'002',name:'sleep',done:true,},
      {id:'003',name:'code',done:false,}
    ]
  }
  render(){
    const {todos} = this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={this.addTodo}></Header>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
      </div>
    </div>
    )
  }
   //addTodo用于添加一个todo，接收的参数是todo对象
   addTodo = (todoObj) => {
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    this.setState({todos: newTodos})
  }
  //updateTodo更新一个todo的状态
  updateTodo = (id,done) => {
    //获取状态中的todos
    const {todos} = this.state
    const newTodos = todos.map(todoObj => {
      //匹配处理数据
      //判断传递过来的id与遍历数组每一项的id是否相同，如果检测到相同的id，则将done改换为传递过来的done，否则返回原todoObj
      if(todoObj.id === id){
        return {...todoObj, done}
      }else{
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }
  //deleteTodo用于删除一个todo
  deleteTodo = (id) => {
      //获取原来的todos
      const {todos} = this.state
      //删除指定id的todo对象
      const newTodos = todos.filter(todoObj => {
        return todoObj.id !== id
      })
      //更新状态
      this.setState({todos: newTodos})
  }
  //checkAllTodo用于全选
  checkAllTodo = (done) => {
     //获取原来的todos
     const {todos} = this.state
     //加工数据
     const newTodos = todos.map(todoObj =>{
       return {...todoObj,done}
     })
     //更新状态
     this.setState({todos: newTodos})
  }
   //clearAllDone用于清除所有已完成
   clearAllDone = () => {
    //获取原来的todos
    const {todos} = this.state
    //过滤数据
    const newTodos = todos.filter(todoObj =>{
      return !todoObj.done
    })
     //更新状态
     this.setState({todos: newTodos})
  }
}

