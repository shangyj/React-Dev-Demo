module.exports = {
  path: 'notfound',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./NotFoundPage').default)
    }, 'notfound')
  }
}
