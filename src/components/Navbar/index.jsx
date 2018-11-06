import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemonByName } from '../../store/actions/pokemons';

const propTypes = {
  getPokemonByName: PropTypes.func.isRequired,
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (e) => {
    const { getPokemonByName: getPokemonByNameAction } = this.props;
    this.setState({ searchTerm: e.target.value });
    getPokemonByNameAction(e.target.value);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" onChange={this.handleInputChange} value={searchTerm} type="search" placeholder="Search" aria-label="Search" />
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;

export default connect(null, { getPokemonByName })(Navbar);
