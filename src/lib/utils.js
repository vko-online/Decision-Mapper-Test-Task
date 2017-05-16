/**
 * @flow
 */

import type {State as Filter} from '../reducers/filter';

import type {Pokemon} from '../reducers/api';

export function filterPokemons(filter: Filter, arr: Array<Pokemon>) {
  if (!filter) {
    return arr;
  }

  return arr
    .filter(item => item.name.includes(filter.search));
    // .filter(item => item.type === filter.type);
    // dont have access to TYPE prop of pokemon
}
