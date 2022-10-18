//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
//引入app组件
import App from './App';
//渲染App组件到页面
ReactDOM.render(
    /*
        BrowserRouter和HashRouter的区别
          1.底层原理不一样
            BrowserRouter使用的是H5的history api,不兼容ie9以下的版本
            HashRouter使用的是URL的哈希值
          2.url的表现形式不一样
            BrowserRouter的路径中没有#，例如localhost:3000/demo/text
            HashRouter的路径中包含#，例如localhost:3000/#/demo/text
          3.刷新后对路由state参数的影响
            BrowserRouter没有影响，因为state保存在history对象中
            HashRouter会导致路由state参数的丢失(重点)
          4.HashRouter可以用于解决一些路径错误相关的问题
    */
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

