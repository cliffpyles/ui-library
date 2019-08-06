import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./MediaObject.scss";

const MediaObject = ({
  children,
  className = "",
  style = {},
  media,
  hasExtraSmallMedia,
  hasSmallMedia,
  hasLargeMedia
}) => {
  const _classNames = classNames({
    MediaObject: true,
    "has-extra-small-media": hasExtraSmallMedia,
    "has-small-media": hasSmallMedia,
    "has-large-media": hasLargeMedia
  });
  return (
    <div className={`${_classNames} ${className}`} style={style}>
      <div className="MediaObject__media">{media}</div>
      <div className="MediaObject__main">{children}</div>
    </div>
  );
};

MediaObject.propTypes = {
  children: PropTypes.node.isRequired,
  media: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  hasExtraSmallMedia: PropTypes.bool,
  hasSmallMedia: PropTypes.bool,
  hasLargeMedia: PropTypes.bool
};

export default MediaObject;
