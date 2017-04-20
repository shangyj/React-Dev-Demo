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
// import App from './pages/App/App';
// import ConnectOrder from './pages/Order/Order';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./pages/NotFoundPage/NotFoundPage').default)
      }, 'HomePage')
    },
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./pages/App/App').default)
    }, 'HomePage')
  },
  childRoutes: [
    require('./pages/Order/OrderRouter'),
    require('./pages/NotFoundPage/NotFoundPageRouter'),
  ]
}
render((
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute}>
    </Router>
  </Provider>
), document.getElementById('app'));
