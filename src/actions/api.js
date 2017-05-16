/**
 * @flow
 */

'use strict';

const superagent = require('superagent');
import type {ThunkAction} from './types';
const URL = '//pokeapi.co/api/v2/';

type ResultItemData = {
  url: string,
  name: string,
};

type ResultData = {
  count: number,
  previous: string,
  results: Array<ResultItemData>,
  next: string,
};

type QueryFilter = {
  page: number,
  pageSize: number,
};

function loadQuery(type: string, query: Promise<any>, key): ThunkAction {
  return dispatch => {
    return query.then(result => {
      const data = result.body[key];
      dispatch(({type, data}: any));
    });
  };
}

function buildQuery(
  entity: string,
  filter?: QueryFilter,
): Promise<any> {

  // no idea how quering works for pokeapi.com
  // only noticed `?offset=20` param
  let offset = '';
  if (filter) {
    offset = `?offset=${(filter.page + 1) * filter.pageSize}`;
  }
  return superagent.get(`${URL}${entity}${offset}`);
}

module.exports = {
  loadPokemons: (filter: QueryFilter): ThunkAction =>
    loadQuery('LOADED_POKEMONS', buildQuery('pokemon', filter), 'results'),
  loadTypes: (): ThunkAction =>
    loadQuery('LOADED_TYPES', buildQuery('type'), 'results'),
  loadAbilities: (): ThunkAction =>
    loadQuery('LOADED_ABILITIES', buildQuery('ability'), 'results'),
};
