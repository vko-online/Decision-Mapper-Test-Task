/**
 * @flow
 */

'use strict';

import type {Action} from './types';

function search(search: string): Action {
  return {
    type: 'FILTER_SEARCH',
    value: search,
  };
}

module.exports = {search};
