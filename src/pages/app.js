// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.less';
import '../css/common.less';
import Siderdmo from '../components/navigation/navition.jsx';
// pages
import Page1 from './page1/index';
import Page2 from './page2/index';
import Page3 from './page3/index';
const { Header, Content, Footer} = Layout;

class Application extends Component {
  render() {
    return (
      <div id="components-layout-demo-side">
        <Layout className="ant-layout-has-sider">
          <Siderdmo></Siderdmo>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>订单</Breadcrumb.Item>
                <Breadcrumb.Item>订单列表</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 540 }}>
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
        <IndexRoute component={Page1}/>
        <Route path="page1" component={Page1}></Route>
        <Route path="page2" component={Page2}></Route>
        <Route path="page3" component={Page3}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
