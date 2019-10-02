import { connect } from 'react-redux';
import { compose } from 'redux';

import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Item from './Item';

const List = ({ list }) => {
  return (
    <Jumbotron>
      <ListGroup>
        {
          list.map((item, index) => (
            <Item key={index} {...item} />
          ))
        }
      </ListGroup>
    </Jumbotron>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default compose(connect(mapStateToProps))(List)