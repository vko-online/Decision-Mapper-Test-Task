/**
 * @flow
 */

'use strict';

/**
 * @flow
 */

'use strict';

import type {Action} from '../actions/types';

export type GenericPokemonData = {
  name: string;
  url: string;
}

export type State = {
  pokemons: Array<GenericPokemonData>;
  types: Array<GenericPokemonData>;
  abilities: Array<GenericPokemonData>;
  current: any;
};

const initialState = {
  pokemons: [],
  types: [],
  abilities: [],
  current: null,
};

function api(state: State = initialState, action: Action): State {
  if (action.type === 'LOADED_POKEMONS') {
    return {...state, pokemons: action.data}
  }
  if (action.type === 'LOADED_TYPES') {
    return {...state, types: action.data}
  }
  if (action.type === 'LOADED_ABILITIES') {
    return {...state, abilities: action.data}
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

module.exports = api;