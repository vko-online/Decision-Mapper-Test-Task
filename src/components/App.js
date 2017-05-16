import React, {Component} from 'react';
const {connect} = require('react-redux');
const { createSelector } = require('reselect');

import Login from './Login';
import {AbilityFilter, TypeFilter, SearchFilter} from './Filter';
import PokemonTable from './PokemonTable';

import {loadPokemons, loadTypes, loadAbilities, search} from '../actions';
import { filterPokemons } from '../lib/utils.js';

import type {Data} from '../reducers/index';

type State = {
  result: string,
};

class App extends Component {
  props: Props;
  state: State;

  constructor() {
    super();
    this.state = {
      result: 'haha',
    };
  }

  componentWillMount() {
    this.props.loadPokemons();
    this.props.loadTypes();
    this.props.loadAbilities();
  }

  render() {
    return (
      <div className="AppRoot">
        {/*<Login />*/}
        <div>
          <div>
            <SearchFilter search={this.props.search} searchChange={this.props.searchChange}/>
            <AbilityFilter abilities={this.props.abilities} />
            <TypeFilter types={this.props.types} /> 
          </div>
          <PokemonTable
            list={this.props.pokemons}
            pagination={this.props.loadPokemons}
          />
        </div>
      </div>
    );
  }
}

const data = createSelector(
  (store) => store.api.pokemons,
  (store) => store.filter,
  (list, filter) => filterPokemons(filter, list),
);

function select(store) {
  return {
    user: store.user,
    pokemons: data(store),
    types: store.api.types,
    abilities: store.api.abilities,
  };
}

function actions(dispatch, props) {
  return {
    loadPokemons: filter => dispatch(loadPokemons(filter)),
    loadTypes: () => dispatch(loadTypes()),
    loadAbilities: () => dispatch(loadAbilities()),
    searchChange: value => dispatch(search(value)),
  };
}

module.exports = connect(select, actions)(App);
