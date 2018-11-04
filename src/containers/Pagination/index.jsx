import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import pageCounter from '../../utils/pageCounter';

const propTypes = {
  total: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

function Pagination({ match: { params: { page } }, total, limit }) {
  let currentPage = 1;
  if (page) {
    currentPage = parseInt(page, 10);
  }

  const renderPages = (num) => {
    const pages = [];
    for (let i = 1; i <= num; i += 1) {
      pages.push(
        <li key={i} className={`page-item page ${currentPage === i && 'active'}`}>
          <Link to={`/pokemons/${i}`} id={i} className="page-link">{i}</Link>
        </li>,
      );
    }
    return pages;
  };

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
        <Link to={`/pokemons/${currentPage - 1}`} className="page-link">Previous</Link>
      </li>
      {renderPages(pageCounter(total, limit))}
      <li className={`page-item ${currentPage === pageCounter(total, limit) && 'disabled'}`}>
        <Link to={`/pokemons/${currentPage + 1}`} className="page-link">Next</Link>
      </li>
    </ul>
  );
}


Pagination.propTypes = propTypes;

export default withRouter(Pagination);
