/**
 * @flow
 */

'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
var promise = require('./promise');
var array = require('./array');
var reducers = require('../reducers/index');

var isDebuggingInChrome = !!window.navigator.userAgent;

var createAppStore = applyMiddleware(thunk, promise, array)(createStore);

function configureStore(onComplete: ?() => void) {
  return createAppStore(reducers);
}

module.exports = configureStore;