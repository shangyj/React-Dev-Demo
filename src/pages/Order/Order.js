import React, { Component } from 'react';
import { Table, Button} from 'antd';

const columns = [
  { title: '发货人', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '订单ID', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: '收货地址 1', dataIndex: 'address', key: '1', width: 150 },
  { title: '收货地址 2', dataIndex: 'address', key: '2', width: 150 },
  { title: '收货地址 3', dataIndex: 'address', key: '3', width: 150 },
  { title: '收货地址 4', dataIndex: 'address', key: '4', width: 150 },
  { title: '收货地址 5', dataIndex: 'address', key: '5', width: 150 },
  { title: '收货地址 6', dataIndex: 'address', key: '6', width: 150 },
  { title: '收货地址 7', dataIndex: 'address', key: '7', width: 150 },
  { title: '收货地址 8', dataIndex: 'address', key: '8' },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="#">编辑</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `订单 ${i}`,
    age: 32,
    address: `用友软件园 no. ${i}`,
  });
}
class orderpage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Button type="primary">新增</Button>
        <Table columns={columns} dataSource={data} scroll={{ x: 1500}} />
      </div>
    );
  }

}
export default orderpage;
