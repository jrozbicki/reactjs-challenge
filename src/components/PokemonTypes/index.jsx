import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  types: PropTypes.instanceOf(Array).isRequired,
};

function PokemonTypes({ types }) {
  return (
    <div className="types-container">
      {types.map(type => <div key={type} className={`type-${type.toLowerCase()}`}>{type}</div>)}
    </div>
  );
}

PokemonTypes.propTypes = propTypes;

export default PokemonTypes;
