// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import 'antd/dist/antd.less';
import './css/common.less';


const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="order" component={ConnectedOrderPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
