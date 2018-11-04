import React from 'react';
import PropTypes from 'prop-types';

function PokemonTypes({ types }) {
  const renderType = () => (
    type => <div key={type} className={`type-${type.toLowerCase()}`}>{type}</div>
  );

  return (
    <div className="types-container">
      {types.map(renderType())}
    </div>
  );
}

PokemonTypes.propTypes = {
  types: PropTypes.instanceOf(Array).isRequired,
};

export default PokemonTypes;
