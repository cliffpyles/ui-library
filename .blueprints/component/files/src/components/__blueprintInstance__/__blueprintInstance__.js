import React from 'react';
import PropTypes from 'prop-types';
import './{{blueprintInstance}}.scss';

const {{blueprintInstance}} = ({ children, className = '' }) => {
  return <div className={`{{blueprintInstance}} ${className}`}>{children}</div>;
};

{{blueprintInstance}}.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default {{blueprintInstance}};
