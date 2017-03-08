// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import 'antd/dist/antd.less';
import './css/common.less';
import Siderdmo from './components/navigation/navition.js';
// pages
import Order from './containers/Order/Order.js';
const { Header, Content, Footer} = Layout;

class Application extends Component {
  render() {
    return (
      <div id="app-container">
        <Layout className="ant-layout-has-sider" style={{height:"100vh"}}>
          <Siderdmo></Siderdmo>
          <Layout style={{overflow:"auto",height:"100vh"}}>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>订单</Breadcrumb.Item>
                <Breadcrumb.Item>订单列表</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff'}}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Order}/>
        <Route path="order" component={Order}></Route>
        <Route path="product" component={Order}></Route>
        <Route path="member" component={Order}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
