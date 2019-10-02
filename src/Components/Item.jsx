import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Item = ({ value }) => <ListGroup.Item>{value}</ListGroup.Item>;

Item.propTypes = {
  value: PropTypes.string.isRequired
};

export default Item;