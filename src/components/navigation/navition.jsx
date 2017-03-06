import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class SiderDemo extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      mode: 'inline',
    };
  }
  onCollapse(collapsed){
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse.bind(this)}
        >
          <div className="logo" ></div>
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">订单管理</span></span>}
            >
              <MenuItem key="1">新增订单</MenuItem>
              <MenuItem key="2">订单列表</MenuItem>
              <MenuItem key="3">销售排名</MenuItem>
                <SubMenu
                  key="sub1sub1"
                  title={<span className="nav-text">订单详情</span>}
                >
                  <MenuItem key="11">新增订单</MenuItem>
                  <MenuItem key="12">订单列表</MenuItem>
                  <MenuItem key="13">销售排名</MenuItem>
                </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">商品管理</span></span>}
            >
              <MenuItem key="4">
                 商品列表
              </MenuItem>
              <MenuItem key="5">商品分类</MenuItem>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span className="nav-text">库存管理</span></span>}
            >
             <MenuItem key="6">商品入库</MenuItem>
             <MenuItem key="7">商品出库</MenuItem>
          </SubMenu>

            <MenuItem key="8">
              <span>
                <Icon type="file" />
                <span className="nav-text"><Link to="/page1">人员管理</Link></span>
              </span>
            </MenuItem>
          </Menu>
        </Sider>
    );
  }
}
export default SiderDemo;
