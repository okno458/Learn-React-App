import React, { Component } from 'react'
const data = [
    {id: '01',content: '1111111'},
    {id: '02',content: '2222222'},
    {id: '03',content: '3333333'}
]
export default class Detail extends Component {
  render() {
    //接收params参数
    const {id,title} = this.props.match.params;
    const findResult = data.find(detailObj =>{
        return detailObj.id === id
    })
    return (
      <div>
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>content:{findResult.content} </li>
        </ul>
      </div>
    )
  }
}
