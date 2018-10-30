import React, { Component } from 'react';
import './styles.scss';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };
  }

  renderPages = (num, active) => {
    console.log('renderPages', active);
    let pages = []
    for (let i = 1; i <= num; i++) {
      pages.push(
        <li key={i} className={`page-item ${active === i ? 'active' : ''}`}>
          <span id={i} className="page-link" onClick={this.setCurrentPage}>{i}</span>
        </li>
      )
    }
    return pages;
  }

  setCurrentPage = (e) => {
    if (this.state.currentPage !== parseInt(e.target.id)) {
      this.setState({ currentPage: parseInt(e.target.id) });
    }
  }

  setPreviousPage = () => {
    if (this.state.currentPage !== 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  }

  setNextPage = () => {
    if (this.state.currentPage !== 8) {
      this.setState((state) => ({ currentPage: state.currentPage + 1 }));
    }
  }

  render() {
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className={`page-item ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
            <span className="page-link" onClick={this.setPreviousPage}>Previous</span>
          </li>
          {this.renderPages(8, this.state.currentPage)}
          <li className={`page-item ${this.state.currentPage === 8 ? 'disabled' : ''}`}>
            <span className="page-link" onClick={this.setNextPage}>Next</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;