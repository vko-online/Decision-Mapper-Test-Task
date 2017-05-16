/**
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import ReactTable from 'react-table';

type ReactTableFilter = {
  page: number;
  pageSize: number;
}

type Props = {
  list: Array<Object>;
  pagination: (state: ReactTableFilter) => void;
};

export default class PokemonTable extends Component {
  props: Props;
  constructor() {
    super();
    (this: any).onPagination = this.onPagination.bind(this);
  }

  onPagination(state: ReactTableFilter) {
    this.props.pagination({
      page: state.page,
      pageSize: state.pageSize,
    });
  }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Avatar',
        id: 'avatar',
        // we dont have pokemon id from server
        // hack url field instead 'http://pokeapi.co/api/v2/pokemon/43/'
        accessor: d => Number((d.url.substr(d.url.indexOf('v2/pokemon') + 'v2/pokemon'.length + 1)).replace('/','')),
        Cell: props => <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.value}.png`} alt="avatar"/>,
      },
    ];
    return (
      <div>
        <ReactTable
          className="PokemonTable"
          data={this.props.list}
          columns={columns}
          manual
          onFetchData={this.onPagination}
          pageSizeOptions={[20]}
          sortable={false}
        />
      </div>
    );
  }
}
