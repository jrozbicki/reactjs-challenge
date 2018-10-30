import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonsList from './PokemonsList';
import Pagination from './Pagination';
import Navbar from './Navbar';
import Spinner from '../../components/Spinner';
import { getPokemons } from '../../store/actions';

class Home extends Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    if (page) {
      return this.props.getPokemons(page);
    }
    return this.props.getPokemons(1);
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
        </Fragment>
      );
    }
    return null;
  }
}

Home.defaultProps = {
  isLoading: true,
  isError: null,
};

Home.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.string,
  pokemons: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.pokemons.isLoading,
    isError: state.pokemons.isError,
    pokemons: state.pokemons.data,
  };
};

export default connect(mapStateToProps, { getPokemons })(Home);
