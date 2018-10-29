import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import PokemonsList from './PokemonsList';
import Pagination from './Pagination';

import { getPokemons } from '../../store/actions';

class Home extends Component {
  componentDidMount() {
    this.props.getPokemons(1);
  }

  render() {
    const { pokemons } = this.props;
    return (
      <Fragment>
        <Navbar />
        {pokemons ? <PokemonsList pokemons={pokemons} /> : <div>Loading...</div>}
        <Pagination />
      </Fragment>
    );
  }
}

Home.propTypes = {
  pokemons: PropTypes.instanceOf(Array).isRequired,
  getPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = ({ pokemons }) => ({ pokemons });

export default connect(
  mapStateToProps,
  { getPokemons },
)(Home);
