import React, { Component } from 'react';
import $ from 'jquery';
import './index.scss';

class Page1 extends Component {
  constructor(props){
    super(props)
    this.state={
      result:{},
    }
  }

  render() {
    let status = this.state.result.status?"成功":"失败";
    return (
      <div className="page1">
        <p>本次服务调用:{status}</p>
        <p>提示信息:{this.state.result.msg}</p>
      </div>
    );
  }
  componentDidMount(){
    var self = this;
    $.ajax({
      type:'get',
      url:'/test/queryPageByCondition',
      dataType:'json',
      success:function(data){
        self.setState({
          result : data
        })
        console.log(data.data);
      }
    })
  }

}
export default Page1;
