import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function PokemonTypes({ types }) {
  const renderType = () => (
    types.map((type, index) => (
      <div key={index} className={`type-${type.toLowerCase()}`}>{type}</div>
    ))
  );

  return (
    <div className="types-container">
      {renderType()}
    </div>
  );
}

PokemonTypes.propTypes = {
  types: PropTypes.instanceOf(Array).isRequired,
};

export default PokemonTypes;
