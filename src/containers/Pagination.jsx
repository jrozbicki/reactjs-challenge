import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  currentPage: PropTypes.number.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

function Pagination({ currentPage, history }) {
  const setPage = (e) => {
    if (currentPage !== e.target.id) {
      history.push(`/page/${e.target.id}`);
    }
  };

  const setPreviousPage = () => {
    if (currentPage !== 1) {
      history.replace(`/page/${currentPage - 1}`);
    }
  };

  const setNextPage = () => {
    if (currentPage !== 8) {
      history.replace(`/page/${currentPage + 1}`);
    }
  };

  const renderPages = (num) => {
    const pages = [];
    for (let i = 1; i <= num; i++) {
      pages.push(
        <li key={i} className={`page-item page ${currentPage === i ? 'active' : ''} `}>
          <span id={i} className="page-link" onClick={setPage}>{i}</span>
        </li>,
      );
    }
    return pages;
  };

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''} `}>
          <span className="page-link" onClick={setPreviousPage}>Previous</span>
        </li>
        {renderPages(8)}
        <li className={`page-item ${currentPage === 8 ? 'disabled' : ''} `}>
          <span className="page-link" onClick={setNextPage}>Next</span>
        </li>
      </ul>
    </nav>
  );
}


Pagination.propTypes = propTypes;

const mapStateToProps = ({ currentPage }) => ({ currentPage });

export default compose(
  connect(mapStateToProps),
  withRouter,
)(Pagination);
