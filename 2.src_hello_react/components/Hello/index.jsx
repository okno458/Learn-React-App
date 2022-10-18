import React,{Component} from "react";
//样式的模块化，需要将css文件改名为module
import hello from './index.module.css'
export default class App extends Component{
    render() {
        return (
            <h2 className={hello.title}>
                Hello React
            </h2>
        )
    }
}