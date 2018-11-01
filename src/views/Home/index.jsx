import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonsList from './PokemonsList';
import Pagination from './Pagination';
import Spinner from '../../components/Spinner';
import { getPokemons } from '../../store/actions/pokemons';

const propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.string,
  pokemons: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

const defaultProps = {
  isLoading: true,
  isError: null,
};

class Home extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    if (page) {
      return this.props.getPokemons(page);
    }
    return this.props.getPokemons(1);
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props.match.params;
    if (prevProps.match.params.page !== page) {
      this.props.getPokemons(page);
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.pokemons.isLoading,
    isError: state.pokemons.isError,
    pokemons: state.pokemons.data,
  };
};

export default connect(mapStateToProps, { getPokemons })(Home);
