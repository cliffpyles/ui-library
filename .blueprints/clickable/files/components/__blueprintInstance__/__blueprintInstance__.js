import React from 'react';
import PropTypes from 'prop-types';
import './{{blueprintInstance}}.scss';

const {{blueprintInstance}} = ({ children, className = '', onClick }) => {
  return <{{blueprintInstance}} className={`{{blueprintInstance}} ${className}`} onClick={onClick}>{children}</{{blueprintInstance}}>;
};

{{blueprintInstance}}.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default {{blueprintInstance}};
