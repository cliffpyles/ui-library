import React from 'react';
import PropTypes from 'prop-types';
import './MediaObject.scss';

const MediaObject = ({ children, className = '', style = {} }) => {
  return <div className={`MediaObject ${className}`} style={style}>{children}</div>;
};

MediaObject.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default MediaObject;
