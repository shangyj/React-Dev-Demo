module.exports = {
  path: 'orderdetail',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./OrderDetail').default)
    }, 'orderdetail')
  }
}
