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
import flexpage from './flexprac/index';
import resources from '../config/menu';
injectTapEventPlugin();


class Application extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AppBar
              title="React学习项目"
              iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          </MuiThemeProvider>
        </div>
        <div className="app-content">
          <div className="app-navmenu">
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <div className="left-navbar">
                <MenuExampleIcons resources={resources}></MenuExampleIcons>
              </div>
            </MuiThemeProvider>
          </div>
          <div className="app-panel">
                {this.props.children}
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
        <Route path="flexpage" component={flexpage}></Route>
      </Route>
      <Route path="/login" component={Application}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
