import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  setParentLimit: PropTypes.func.isRequired,
};

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: '20',
    };
  }

  setLimit = (e) => {
    const { setParentLimit } = this.props;
    setParentLimit(e.target.value);
    this.setState({ limit: e.target.value });
  }

  render() {
    const { limit } = this.state;
    return (
      <div className="filter-container">
        <div className="input-group mb-3 select-container">
          <div className="input-group-prepend">
            {/* eslint-disable */}
            <label className="input-group-text" htmlFor="quantitySelect">Display</label>
          </div>
          <select onChange={this.setLimit} value={limit} className="custom-select" id="quantitySelect">
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    );
  }
}

Filter.propTypes = propTypes;

export default Filter;
