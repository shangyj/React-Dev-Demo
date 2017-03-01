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
    return (
      <div className="page2">
        <p>返回结果:{this.state.result.data}</p>
      </div>
    );
  }
  componentDidMount(){
    var self = this;
    $.ajax({
      type:'get',
      url:'http://10.11.98.91:8888/mockjsdata/1/test/getitem',
      dataType:'jsonp',
      jsonp: "callback",
      jsonpCallback:"foo",
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
