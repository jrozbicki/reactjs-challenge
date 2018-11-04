import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonsList from '../components/PokemonList.jsx';
import Pagination from './Pagination.jsx';
import Spinner from '../components/Spinner.jsx';
import { getPokemons } from '../store/actions/pokemons';

const propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.string,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  getPokemons: PropTypes.func.isRequired,
};

const defaultProps = {
  isLoading: true,
  isError: null,
};

class Home extends Component {
  componentDidMount() {
    const { match: { params: { page } }, getPokemons: getPokemonsAction } = this.props;
    if (page) {
      return getPokemonsAction(page);
    }
    return getPokemonsAction(1);
  }

  componentDidUpdate({ match: { params: { page: previousPage } } }) {
    const { match: { params: { page: currentPage } }, getPokemons: getPokemonsAction } = this.props;
    if (previousPage !== currentPage) {
      getPokemonsAction(currentPage);
    }
  }

  render() {
    const { isLoading, isError, pokemons } = this.props;

    if (isError) {
      return isError;
    }

    if (isLoading) {
      return <Spinner />;
    }

    if (pokemons.length) {
      return (
        <Fragment>
          <Pagination />
          <PokemonsList pokemons={pokemons} />
          <Pagination />
        </Fragment>
      );
    }
    return null;
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const mapStateToProps = ({ pokemons: { isLoading, isError, data: pokemons } }) => (
  {
    isLoading,
    isError,
    pokemons,
  }
);

export default connect(mapStateToProps, { getPokemons })(Home);
