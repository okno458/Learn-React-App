import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {
    render() {
        const {todos} = this.props;
        //已完成的个数
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0),0)
        //总数
        const total = todos.length
        return (
            <div className="todo-footer">
            <label>
              <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll}/>
            </label>
            <span>
              <span>已完成{doneCount} </span> / 全部 {total} 
            </span>
            <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
          </div>
        );
    }
    //全选checkbox的回调
    handleCheckAll = (e) => {
      this.props.checkAllTodo(e.target.checked);
    }
    //清除所有已完成的回调
    handleClearAllDone = () => {
      this.props.clearAllDone()
    }
}
