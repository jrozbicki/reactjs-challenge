import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import PokemonsList from '../../components/PokemonList';
import Spinner from '../../components/Spinner';
import ShowError from '../../components/ShowError';
import { getPokemons } from '../../store/actions/pokemons';

const propTypes = {
  isLoading: PropTypes.bool,
  total: PropTypes.string,
  isError: PropTypes.string,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPokemons: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

const defaultProps = {
  isLoading: true,
  isError: null,
  total: '',
};

class Home extends Component {
  componentDidMount() {
    const {
      getPokemons: getPokemonsAction,
      match: { params: { page: startingPage } },
    } = this.props;

    if (startingPage) {
      getPokemonsAction(startingPage);
    } else {
      getPokemonsAction(1);
    }
  }

  componentDidUpdate({ match: { params: { page: previousPage } } }) {
    const { getPokemons: getPokemonsAction, match: { params: { page: currentPage } } } = this.props;

    if (previousPage !== currentPage) {
      getPokemonsAction(currentPage);
    }
  }

  render() {
    const {
      isLoading,
      isError,
      pokemons,
      total,
    } = this.props;

    if (isError) {
      return <ShowError />;
    }

    if (pokemons.length) {
      return (
        <Fragment>
          <Pagination total={total} limit="20" />
          {isLoading ? <Spinner /> : <PokemonsList pokemons={pokemons} />}
          <Pagination total={total} limit="20" />
        </Fragment>
      );
    }
    return <ShowError />;
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const mapStateToProps = (
  {
    pokemons: {
      isLoading,
      isError,
      data: pokemons,
      total,
    },
  },
) => (
  {
    isLoading,
    isError,
    pokemons,
    total,
  }
);

export default connect(mapStateToProps, { getPokemons })(Home);
