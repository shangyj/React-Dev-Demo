module.exports = {
  path: 'order',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Order').default)
    }, 'orderlist')
  },
  childRoutes: [
    require('./OrderDetail/OrderDetailRouter'),
  ]
}
