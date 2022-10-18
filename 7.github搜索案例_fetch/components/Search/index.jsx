import React, { Component } from 'react';
// import axios from 'axios';
import PubSub from 'pubsub-js'
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
    search = async () => {
        //获取用户的输入 （连续结构赋值语法外加重命名 将解构出来的value改名为keyword）
        const {keywordElement:{value:keyword}} = this
        //发送请求前通知List更新状态
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        //发送网络请求---使用axios
        // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => {
        //     //请求成功后通知List更改状态
        //     PubSub.publish('atguigu',{isLoading:false,users:res.data.items})
        // },reason => {
        //     //请求失败后通知List更改状态
        //     PubSub.publish('atguigu',{isFirst:false,err:reason.message})
        // })
        //发送网络请求---使用fetch(未优化)
        // fetch(`https://api.github.com/search/users?q=${keyword}`).then(res => {
        //     console.log('联系服务器成功');
        //     return res.json()
        // },err => {
        //     console.log('联系服务器失败',err);
        //     return new Promise()
        // }).then(res => {
        //     console.log('获取数据成功了',res);
        // },err => {
        //     console.log('获取数据失败了',err);
        // }).catch(err => {
        //     console.log(err,'errssss');
        // })
        //发送网络请求---使用fetch(已优化)
        try {
            const resp = await fetch(`https://api.github.com/search/users?q=${keyword}`)
            const data = await resp.json();
            PubSub.publish('atguigu',{isLoading:false,users:data.items})
        } catch (error) {
            PubSub.publish('atguigu',{isFirst:false,err:error.message})
        }
    }
}

