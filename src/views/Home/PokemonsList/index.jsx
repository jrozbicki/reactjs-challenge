import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PokemonTypes from './PokemonTypes';

class PokemonsList extends Component {
  renderList() {
    const { pokemons } = this.props;
    console.log('renderList');
    return pokemons.map((pokemon) => {
      return (
        <div className="card" key={pokemon.id}>
          <img className="card-img-top" src={`${pokemon.img}`} alt="pokemon" />
          <div className="card-body">
            <h5 className="card-title">{`#${pokemon.num} ${pokemon.name}`}</h5>
            <PokemonTypes types={pokemon.type} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <ul className="pokemon-list">
        {this.renderList()}
      </ul>
    );
  }
}

PokemonsList.propTypes = {
  pokemons: PropTypes.instanceOf(Array).isRequired,
};

export default PokemonsList;
