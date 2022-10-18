import React, { Component } from 'react';
import axios from 'axios';
export default class Search extends Component {
    render() {
        return (
            <div>
                 <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="输入关键词点击搜索" ref={c => this.keywordElement = c}/>&nbsp;
                        <button onClick={this.search}>搜索</button>
                    </div>
                </section>
            </div>
        );
    }
    search = () => {
        //获取用户的输入 （连续结构赋值语法外加重命名 将解构出来的value改名为keyword）
        const {keywordElement:{value:keyword}} = this
        //发送请求前通知APP更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => {
            //请求成功后通知App更改状态
            this.props.updateAppState({isLoading:false,users:res.data.items})
        },reason => {
            //请求失败后通知App更改状态
            this.props.updateAppState({isLoading:false,err:reason.message})
        })
    }
}

