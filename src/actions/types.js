/**
 * @flow
 */

'use strict';

export type Action =
  { type: 'TEST', result: boolean }
  | { type: 'LOADED_POKEMONS', data: Array<Object> }
  | { type: 'LOADED_TYPES', data: Array<Object> }
  | { type: 'LOADED_ABILITIES', data: Array<Object> }
  | { type: 'FILTER_SEARCH', value: string }
  | { type: 'FILTER_TYPE', value: string }
  | { type: 'LOGGED_IN', data: { id: string; name: string; } }
  | { type: 'SKIPPED_LOGIN' }
  | { type: 'LOGGED_OUT' }
  ;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;