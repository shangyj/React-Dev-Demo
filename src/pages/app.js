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
import CircularProgress from 'material-ui/CircularProgress';
import MenuExampleIcons from '../components/navigation/navition.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
// pages
import Page1 from './page1/index';
import Page2 from './page2/index';
import Page3 from './page3/index';
import flexpage from './flexprac/index';
import login from './login/login';
import resources from '../config/menu';
injectTapEventPlugin();

const RightElement =  <CircularProgress color="#fff" size={30} thickness={2} style={{ margin: 8 }} />;

class Application extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="app-container">
        <AppBar
              title="React学习项目"
              iconElementRight={RightElement}/>
          <div className="app-content">
            <MenuExampleIcons resources={resources}></MenuExampleIcons>
            <div className="app-panel">
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>

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
      <Route path="/login" component={login}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
