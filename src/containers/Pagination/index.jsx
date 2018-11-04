import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

function Pagination({ history }) {
  let currentPage = 1;
  if (history.location.search.match(/\d+/) && history.location.search.match(/\d+/)[0]) {
    const [page] = history.location.search.match(/\d+/);
    currentPage = parseInt(page, 10);
  }

  const renderPages = (num) => {
    const pages = [];
    for (let i = 1; i <= num; i += 1) {
      pages.push(
        <li key={i} className={`page-item page ${currentPage === i && 'active'}`}>
          <Link to={{ search: `?page=${i}` }} id={i} className="page-link">{i}</Link>
        </li>,
      );
    }
    return pages;
  };

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <Link to={{ search: `?page=${currentPage - 1}` }} className="page-link">Previous</Link>
        </li>
        {renderPages(8)}
        <li className={`page-item ${currentPage === 8 && 'disabled'}`}>
          <Link to={{ search: `?page=${currentPage + 1}` }} className="page-link">Next</Link>
        </li>
      </ul>
    </nav>
  );
}


Pagination.propTypes = propTypes;

export default withRouter(Pagination);
