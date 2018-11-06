import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonByName } from '../../store/actions/pokemons';
import Pokedex from '../../img/pokedex.png';

const propTypes = {
  getPokemonByName: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (e) => {
    const { getPokemonByName: getPokemonByNameAction, limit } = this.props;
    this.setState({ searchTerm: e.target.value });
    getPokemonByNameAction(e.target.value, limit);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/">
          <img className="pokedex-logo" src={Pokedex} alt="pokedex" />
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            onChange={this.handleInputChange}
            value={searchTerm}
            type="search"
            placeholder="Search pokemons..."
            aria-label="Search"
          />
        </form>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;

export default connect(null, { getPokemonByName })(Navbar);
