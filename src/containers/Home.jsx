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
  getPokemons: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const defaultProps = {
  isLoading: true,
  isError: null,
};

class Home extends Component {
  componentDidMount() {
    const {
      getPokemons: getPokemonsAction,
      history,
    } = this.props;

    if (history.location.search.match(/\d+/) && history.location.search.match(/\d+/)[0]) {
      getPokemonsAction(history.location.search.match(/\d+/)[0]);
    } else {
      getPokemonsAction(1);
    }

    history.listen(() => {
      if (history.location.search.match(/\d+/) && history.location.search.match(/\d+/)[0]) {
        console.log('history listen', history.location.search.match(/\d+/)[0]);
        getPokemonsAction(history.location.search.match(/\d+/)[0]);
      }
    });
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
