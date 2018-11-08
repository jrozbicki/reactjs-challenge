import React from 'react';
import { Link } from 'react-router-dom';
import Pikachu from '../../img/pikachu-error.png';

function ShowError() {
  return (
    <div className="error-container">
      <div className="img-container">
        <img src={Pikachu} alt="pikachu" />
      </div>
      <span className="error-text">Oops! Something went wrong...</span>
      <Link to="/" className="error-link">Go to homepage</Link>
    </div>
  );
}

export default ShowError;
