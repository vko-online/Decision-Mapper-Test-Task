/**
 * @flow
 */

'use strict';

import React, {Component} from 'react';

import type {GenericPokemonData} from '../reducers/api';

type TypeProps = {
  types: Array<GenericPokemonData>,
  onChange?: (e: any) => void,
};

type AbilityProps = {
  abilities: Array<GenericPokemonData>,
  onChange?: (e: any) => void,
};

type SearchProps = {
  search: string,
  searchChange?: (e: any) => void,
};


export class TypeFilter extends Component {
  props: TypeProps;
  render() {
    return (
      <div>
        <label>Types</label>
        <select onChange={this.props.onChange}>
          {this.props.types.map((item, index) => {
            return <option value={item.name} key={index}>{item.name}</option>;
          })}
        </select>
        <br/>
        <small><code>http://pokeapi.co/ cannot query this filter</code></small>
      </div>
    );
  }
}

export class AbilityFilter extends Component {
  props: AbilityProps;
  render() {
    return (
      <div>
        <label>Abilities</label>
        <select onChange={this.props.onChange}>
          {this.props.abilities.map((item, index) => {
            return <option value={item.name} key={index}>{item.name}</option>;
          })}
        </select>
        <br/>
        <small><code>http://pokeapi.co/ cannot query this filter</code></small>
      </div>
    );
  }
}

export class SearchFilter extends Component {
  props: SearchProps;
  constructor() {
    super();
    (this: any).onSearch = this.onSearch.bind(this);
  }
  onSearch(e:any) {
    if (this.props.searchChange) {
      this.props.searchChange(e.target.value);
    }
  }
  render() {
    return (
      <div>
        <label>Search</label>
        <input onChange={this.onSearch} value={this.props.search}/>
      </div>
    );
  }
}