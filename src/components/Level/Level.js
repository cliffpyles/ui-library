import React from 'react';
import PropTypes from 'prop-types';
import './Level.scss';

const Level = ({ children, className = '', style = {} }) => {
  return <div className={`Level ${className}`} style={style}>{children}</div>;
};

Level.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Level;
