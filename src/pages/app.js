// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';
import '../css/common.less';
//Component
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MenuExampleIcons from '../components/navigation/navition.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
// pages
import Page1 from './page1/index';
import Page2 from './page2/index';
import Page3 from './page3/index';
injectTapEventPlugin();
class Application extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <AppBar
            title="ecp-portal-static"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        </MuiThemeProvider>
        <div className="header">
          <Link to="page1">普通查询</Link>
          <Link to="page2">跨域查询</Link>
          <Link to="page3">restfulapi</Link>
        </div>
        {this.props.children}
        <div className="flex-container">

          <div className="first-item">
            <span className="circle"></span>
          </div>

          <div className="second-item">
            <span className="circle"></span>
            <span className="circle"></span>
          </div>

          <div className="third-item">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>

          <div className="fourth-item">
            <div className="column">
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
            <div className="column">
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
          </div>

          <div className="fifth-item">
            <div className="column">
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
            <div className="column">
              <span className="circle"></span>
            </div>
            <div className="column">
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
          </div>

          <div className="sixth-item">
            <div className="column">
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
            <div className="column">
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
          </div>

        </div>
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
