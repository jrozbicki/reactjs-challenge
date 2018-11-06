import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonDetails from '../PokemonDetails';

import PokemonTypes from '../PokemonTypes';

const propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class PokemonsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonDetails: {},
    };
  }

  selectPokemonDetails = (e) => {
    const { pokemons } = this.props;
    this.setState({
      pokemonDetails: pokemons.find(element => element.id === parseInt(e.currentTarget.id, 10)),
    });
  };

  render() {
    const { pokemonDetails } = this.state;
    const { pokemons } = this.props;
    return (
      <Fragment>
        <PokemonDetails pokemonDetails={pokemonDetails} />
        <ul className="pokemon-list">
          {pokemons.map(pokemon => (
            /* eslint-disable */
            <li id={pokemon.id} onClick={this.selectPokemonDetails} className="card" key={pokemon.id} type="button" data-toggle="modal" data-target="#pokemonDetails">
              <img className="card-img-top" src={`${pokemon.img}`} alt="pokemon" />
              <div className="card-body">
                <h5 className="card-title">{`#${pokemon.num} ${pokemon.name}`}</h5>
                <PokemonTypes types={pokemon.type} />
              </div>
            </li>))}
        </ul>
      </Fragment>
    );
  }
}

PokemonsList.propTypes = propTypes;

export default PokemonsList;
