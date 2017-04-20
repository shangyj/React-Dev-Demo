import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button} from 'antd';

import { fetchOrders } from './../../actions/orders';
import './Order.less';

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const { orders } = state;
  return {
    orders
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  // bindActionCreators(ActionCreators, dispatch)
  return {
    fetchOrders: (params) => dispatch(fetchOrders(params))
  };
}

class OrderPage extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const columns = [
      { title: '发货人', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
      { title: '单据号', width: 200, dataIndex: 'billcode', key: 'billcode', fixed: 'left' },
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
    const { orders: { data, meta, isFetching } } = this.props;
    const pagination = {
      showSizeChanger: true,
      total: meta.total,
      pageSize: meta.perPage,
      pageSizeOptions: ['1','10','20','40']
    };
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          rowKey={(record) => record.id}
          loading={isFetching}
          scroll={{ x: 1600}}
          />
          {this.props.children}
      </div>
    );
  }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);
