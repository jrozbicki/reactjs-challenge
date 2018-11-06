import React from 'react';
import NoPokemons from '../../img/no-pokemons-here.jpg';

function NoPokemonsHere() {
  return (
    <div className="no-pokemons-container">
      <img src={NoPokemons} alt="no pokemons" />
    </div>
  );
}

export default NoPokemonsHere;
