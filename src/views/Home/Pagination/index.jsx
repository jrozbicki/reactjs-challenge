import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentPage } from '../../../store/actions';

import './styles.scss';

const propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

class Pagination extends Component {
  componentDidMount() {
    const { currentPage, match: { params: { page } } } = this.props;
    if (page !== currentPage) {
      this.props.setCurrentPage(parseInt(page, 2));
    } else {
      this.props.setCurrentPage(1);
    }
  }

  setPage(e) {
    const { currentPage, history } = this.props;
    if (currentPage !== parseInt(e.target.id, 2)) {
      history.replace(`/page/${parseInt(e.target.id, 2)}`);
    }
  }

  setPreviousPage() {
    const { currentPage, history } = this.props;
    if (currentPage !== 1) {
      history.replace(`/page/${currentPage - 1}`);
    }
  }

  setNextPage() {
    const { currentPage, history } = this.props;
    if (currentPage !== 8) {
      history.replace(`/page/${currentPage + 1}`);
    }
  }

  renderPages(num, active) {
    const pages = [];
    for (let i = 1; i <= num; i++) {
      pages.push(
        <li key={i} className={`page-item ${active === i ? 'active' : ''}`}>
          <span id={i} className="page-link" onClick={this.setPage}>{i}</span>
        </li>,
      );
    }
    return pages;
  }

  render() {
    const { currentPage } = this.props;
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <span className="page-link" onClick={this.setPreviousPage}>Previous</span>
          </li>
          {this.renderPages(8, currentPage)}
          <li className={`page-item ${currentPage === 8 ? 'disabled' : ''}`}>
            <span className="page-link" onClick={this.setNextPage}>Next</span>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = propTypes;

const mapStateToProps = ({ currentPage }) => {
  return {
    currentPage,
  };
};

export default compose(
  connect(mapStateToProps, { setCurrentPage }),
  withRouter,
)(Pagination);
