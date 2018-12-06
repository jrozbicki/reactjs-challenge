import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Navbar from '../../components/Navbar';
import Pagination from '../Pagination';
import Filter from '../../components/Filter';
import PokemonsList from '../../components/PokemonList';
import Spinner from '../../components/Spinner';
import ShowError from '../../components/ShowError';
import NoPokemonsHere from '../../components/NoPokemonsHere';
import { PENDING, ERROR, DONE } from '../../stores/PokemonStore';

const propTypes = {
  pokemonStore: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

@inject('pokemonStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: '20',
    };
  }

  componentDidMount() {
    const {
      pokemonStore: { fetchPokemons },
      match: {
        params: { page: startingPage },
      },
    } = this.props;
    const { limit } = this.state;
    if (startingPage) {
      fetchPokemons(startingPage, limit);
    } else {
      fetchPokemons(1, limit);
    }
  }

  componentDidUpdate(
    {
      match: {
        params: { page: previousPage },
      },
    },
    prevState,
  ) {
    const {
      pokemonStore: { fetchPokemons },
      match: {
        params: { page: currentPage },
      },
    } = this.props;
    const { limit } = this.state;
    if (previousPage !== currentPage || prevState.limit !== limit) {
      fetchPokemons(currentPage, limit);
    }
  }

  setLimit = lim => this.setState({ limit: lim });

  renderContent = (loadingState, pokemons, total, limit) => {
    switch (loadingState) {
      case PENDING:
        return <Spinner />;
      case DONE:
        return pokemons.length ? (
          <Fragment>
            <PokemonsList pokemons={pokemons} />
            <Pagination total={total} limit={limit} />
          </Fragment>
        ) : (
          <NoPokemonsHere />
        );
      case ERROR:
        return <ShowError />;
      default:
        return null;
    }
  };

  render() {
    const {
      pokemonStore,
      pokemonStore: { loadingState, pokemons, total },
    } = this.props;
    const { limit } = this.state;
    return (
      <Fragment>
        <Navbar limit={limit} pokemonStore={pokemonStore} />
        <div className="content-container">
          <Pagination total={total} limit={limit} />
          <Filter setParentLimit={this.setLimit} />
          {this.renderContent(loadingState, pokemons, total, limit)}
        </div>
      </Fragment>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
