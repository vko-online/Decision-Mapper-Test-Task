/**
 * @flow
 */

'use strict';

import type {Action} from '../actions/types';

export type State = {
  type: string;
  ability: string; // we might use checkbox for filtering, might require stringMap here
  search: string;
};

const initialState = {type: '', search: '', ability: ''};

function filter(state: State = initialState, action: Action): State {
  if (action.type === 'FILTER_SEARCH') {
    return {...state, search: action.value};
  }
  if (action.type === 'FILTER_TYPE') {
    return {...state, type: action.value};
  }
  if (action.type === 'FILTER_ABILITIES') {
    return {...state, ability: action.value};
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

module.exports = filter;
