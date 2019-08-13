import React from 'react';
import PropTypes from 'prop-types';
import './{{blueprintInstance}}.scss';

const {{blueprintInstance}} = ({ children, className = '', onClick, style = {} }) => {
  return <div className={`{{blueprintInstance}} ${className}`} onClick={onClick} style={style}>{children}</div>;
};

{{blueprintInstance}}.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default {{blueprintInstance}};
