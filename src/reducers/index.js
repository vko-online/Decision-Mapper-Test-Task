import { combineReducers } from 'redux';

module.exports = combineReducers({
  filter: require('./filter'),
  api: require('./api'),
  user: require('./user'),
});
