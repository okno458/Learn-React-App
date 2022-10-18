import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import './index.css'
export default class Header extends Component {
    //对接受的props进行类型以及必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
    //键盘事件的回调
    handleKeyUp = (e) => {
        //解构赋值获取keyCode,target
        const {keyCode,target} = e;
        //判断用户是否按的是回车键
        if(keyCode !== 13) return
        //添加的todo名字不能为空
        if(target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        //准备好一个TODO对象
        const todoObj = {id: nanoid(),name:target.value,done:false}
        //子组件给父组件传值：父组件利用props传递一个函数给子组件，子组件调用父组件传递过来的函数，就可以将值传递给父组件
        this.props.addTodo(todoObj)
        target.value = ''
    }
}
