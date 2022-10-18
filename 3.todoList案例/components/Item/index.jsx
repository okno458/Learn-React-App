import React, { Component } from 'react';
import './index.css'
export default class Item extends Component {

    state = {mouse:false}//标识鼠标移入和移出

    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;
        return (
            <div>
                {/* 
                    给每一个li都绑定鼠标移入onMouseEnter 和 鼠标移出事件onMouseLeave
                    传递的参数如果是true代表鼠标移入，false代表鼠标移出
                */}
                <li style={{backgroundColor:mouse ? '#ddd':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                      <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                      <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick={() => this.handleDelete(id)}>删除</button>
                </li>
            </div>
        );
    }
    //鼠标移入和移出的回调
    handleMouse = (flag) => {
        // 在标签中写小括号表示直接调用该函数，所以需要写成高阶函数的形式
        return () => {
            this.setState({mouse:flag});
        }
    }
    //勾选或取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (e) => {
            this.props.updateTodo(id,e.target.checked)
        }
    }
    //删除一个todo的回调
    handleDelete = (id) => {
        if(window.confirm("确定删除吗?")){
            this.props.deleteTodo(id)
        }
    }
}
 