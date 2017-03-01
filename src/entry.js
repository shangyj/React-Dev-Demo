import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './components/App.js';

ReactDom.render(
    <Component1 />,
    document.getElementById('content')
);
$.ajax({
  type:'get',
  url:'/test/queryPageByCondition',
  dataType:'json',
  success:function(data){
    console.log(data);
  }
})
