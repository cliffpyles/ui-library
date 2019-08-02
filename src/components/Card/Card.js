import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ children, className = '' }) => {
  return <div className={`Card ${className}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
