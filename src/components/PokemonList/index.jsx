import React from 'react';
import PropTypes from 'prop-types';

import PokemonTypes from '../PokemonTypes';

const propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function PokemonsList({ pokemons }) {
  const renderPokemon = () => (
    pokemon => (
      <div className="card" key={pokemon.id}>
        <img className="card-img-top" src={`${pokemon.img}`} alt="pokemon" />
        <div className="card-body">
          <h5 className="card-title">{`#${pokemon.num} ${pokemon.name}`}</h5>
          <PokemonTypes types={pokemon.type} />
        </div>
      </div>
    )
  );

  return (
    <ul className="pokemon-list">
      {pokemons.map(renderPokemon())}
    </ul>
  );
}

PokemonsList.propTypes = propTypes;

export default PokemonsList;
