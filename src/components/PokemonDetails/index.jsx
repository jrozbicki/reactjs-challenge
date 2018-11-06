import React from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from '../PokemonTypes';

const propTypes = {
  pokemonDetails: PropTypes.instanceOf(Object).isRequired,
};

function PokemonDetails({ pokemonDetails }) {
  const renderPokemon = () => {
    if (pokemonDetails && pokemonDetails.name) {
      return (
        <div className="modal-grid">
          <div className="pokemon-img-container">
            <img src={pokemonDetails.img} alt="pokemon" />
          </div>
          <aside className="right-col">
            <div className="pokemon-details">
              {`ID: #${pokemonDetails.id}`}
            </div>
            <div className="pokemon-details">
              {`Height: ${pokemonDetails.height}`}
            </div>
            <div className="pokemon-details">
              {`Weight: ${pokemonDetails.weight}`}
            </div>
            <div className="pokemon-details">
              {`Candy: ${pokemonDetails.candy}`}
            </div>
            <div className="pokemon-details">
              {`Egg: ${pokemonDetails.egg}`}
            </div>
          </aside>
          <div className="pokemon-types">
            <div className="pokemon-types-header">Type:</div>
            <PokemonTypes types={pokemonDetails.type} />
          </div>
          <div className="pokemon-weaknesses">
            <div className="pokemon-types-header">Weak against:</div>
            <PokemonTypes types={pokemonDetails.weaknesses} />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="modal fade" id="pokemonDetails" tabIndex="-1" role="dialog" aria-labelledby="pokemonDetails" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="pokemonDetails">{pokemonDetails.name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {renderPokemon()}
          </div>
        </div>
      </div>
    </div>
  );
}

PokemonDetails.propTypes = propTypes;

export default PokemonDetails;
