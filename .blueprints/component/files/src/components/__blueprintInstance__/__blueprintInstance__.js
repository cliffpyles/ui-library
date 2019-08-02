import React from 'react';
import PropTypes from 'prop-types';
import './{{blueprintInstance}}.scss';

const {{blueprintInstance}} = ({ children, className = '', style = {} }) => {
  return <div className={`{{blueprintInstance}} ${className}`} style={style}>{children}</div>;
};

{{blueprintInstance}}.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default {{blueprintInstance}};
