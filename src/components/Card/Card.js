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

export const CardHeader = ({ children, className = '' }) => {
  return <div className={`Card ${className}`}>{children}</div>;
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardMain = ({ children, className = '' }) => {
  return <div className={`Card ${className}`}>{children}</div>;
};

CardMain.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardFooter = ({ children, className = '' }) => {
  return <div className={`Card ${className}`}>{children}</div>;
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
