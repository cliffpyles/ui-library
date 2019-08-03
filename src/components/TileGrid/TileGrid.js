import React from "react";
import PropTypes from "prop-types";
import "./TileGrid.scss";

const TileGrid = ({ children, className = "", style = {} }) => {
  return (
    <div className={`TileGrid ${className}`} style={style}>
      {children}
    </div>
  );
};

TileGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default TileGrid;
