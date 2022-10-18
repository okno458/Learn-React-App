import React, { Component } from 'react'
import qs from 'qs'
const data = [
    {id: '01',content: '1111111'},
    {id: '02',content: '2222222'},
    {id: '03',content: '3333333'}
]
export default class Detail extends Component {
  render() {
    //接收params参数
    // const {id,title} = this.props.match.params;
    //接收search参数
    const {search} = this.props.location;
    const {id,title} = qs.parse(search.slice(1))
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
