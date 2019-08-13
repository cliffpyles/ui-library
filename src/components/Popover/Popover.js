import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Popover.scss";

const Popover = ({
  children,
  toggle,
  className = "",
  style = {},
  isLeft = false,
  isTop = false,
  isRight = false,
  isBottom = false,
  isCenter = false,
  isAdaptable = false,
  isToggled = false
}) => {
  const [_isToggled, setIsToggled] = useState(isToggled);
  const _className = classNames({
    Popover: true,
    "is-left": isLeft,
    "is-right": isRight,
    "is-top": isTop,
    "is-bottom": isBottom,
    "is-center": isCenter,
    "is-adaptable": isAdaptable,
    "is-toggled": _isToggled,
    [className]: true
  });
  const handleClick = () => setIsToggled(!_isToggled);

  return (
    <div className={_className} onClick={handleClick} style={style}>
      <div className="Popover__toggle">{toggle}</div>
      <div className="Popover__main">{children}</div>
    </div>
  );
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  toggle: PropTypes.node.isRequired,
  isTop: PropTypes.bool,
  isLeft: PropTypes.bool,
  isRight: PropTypes.bool,
  isBottom: PropTypes.bool,
  isCenter: PropTypes.bool,
  isAdaptable: PropTypes.bool,
  isToggled: PropTypes.bool
};

export default Popover;
