// application's entry
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import 'antd/dist/antd.less';
import './css/common.less';

//pages
import App from './pages/App/App';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
