import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, className = '', onClick }) => {
  return <button className={`Button ${className}`} onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
