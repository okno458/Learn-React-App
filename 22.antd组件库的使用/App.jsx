import React, { Component } from 'react'
import { Button, DatePicker} from 'antd';
import {WechatOutlined,WeiboSquareOutlined } from '@ant-design/icons'
import 'antd/dist/antd.min.css'
const { RangePicker } = DatePicker;
export default class App extends Component {

  render() {
    return (
      <div>
        <button>app</button>
        <Button type="primary">按钮1</Button>
        <Button>按钮2</Button>
        <Button type="link">按钮3</Button>
        <WechatOutlined></WechatOutlined>
        <WeiboSquareOutlined />
        <DatePicker/>
        <RangePicker />
      </div>
    )
  }
}
