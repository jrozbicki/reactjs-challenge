import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import Pagination from '../Pagination';
import Filter from '../../components/Filter';
import PokemonsList from '../../components/PokemonList';
import Spinner from '../../components/Spinner';
import ShowError from '../../components/ShowError';
import NoPokemonsHere from '../../components/NoPokemonsHere';
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
  constructor(props) {
    super(props);

    this.state = {
      limit: '20',
    };
  }

  componentDidMount() {
    const {
      getPokemons: getPokemonsAction,
      match: { params: { page: startingPage } },
    } = this.props;
    const { limit } = this.state;

    if (startingPage) {
      getPokemonsAction(startingPage, limit);
    } else {
      getPokemonsAction(1, limit);
    }
  }

  componentDidUpdate({ match: { params: { page: previousPage } } }, prevState) {
    const { getPokemons: getPokemonsAction, match: { params: { page: currentPage } } } = this.props;
    const { limit } = this.state;
    if (previousPage !== currentPage || prevState.limit !== limit) {
      getPokemonsAction(currentPage, limit);
    }
  }

  setLimit = lim => this.setState({ limit: lim });

  renderContent = (isLoading, pokemons, total, limit) => (
    isLoading
      ? <Spinner />
      : (
        <Fragment>
          <PokemonsList pokemons={pokemons} />
          <Pagination total={total} limit={limit} />
        </Fragment>
      )
  );

  render() {
    const {
      isLoading,
      isError,
      pokemons,
      total,
    } = this.props;
    const { limit } = this.state;

    if (isError) {
      return <ShowError />;
    }

    return (
      <Fragment>
        <Navbar limit={limit} />
        <div className="content-container">
          <Pagination total={total} limit={limit} />
          <Filter setParentLimit={this.setLimit} />        
          {
            pokemons.length
              ? this.renderContent(isLoading, pokemons, total, limit)
              : <NoPokemonsHere />
          }
        </div>
      </Fragment>
    );
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
