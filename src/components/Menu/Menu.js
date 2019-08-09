import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import "./Menu.scss";

const Menu = ({ className = "", style = {}, items = [] }) => {
  return (
    <div className={`Menu ${className}`} style={style}>
      <MenuItems items={items} />
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      action: PropTypes.node,
      indicator: PropTypes.node,
      url: PropTypes.string,
      onClick: PropTypes.func,
      isTitle: PropTypes.bool,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          icon: PropTypes.node,
          action: PropTypes.node,
          indicator: PropTypes.node,
          url: PropTypes.string,
          onClick: PropTypes.func,
          isTitle: PropTypes.bool
        })
      )
    })
  )
};

const MenuItems = ({ items }) => {
  return (
    <div className="Menu__items">
      {items.map(item => {
        return <MenuItem item={item} />;
      })}
    </div>
  );
};

const MenuItem = ({ children, className = "", style = {}, item = {} }) => {
  const hasChildren = item.items && item.items.length;
  const itemLabel =
    item.url || item.onClick ? (
      <a className="Menu_label" href={item.url} onClick={item.onClick}>
        <Text isStrong={item.isTitle}>{item.label}</Text>
      </a>
    ) : (
      <Text className="Menu_label" isStrong={item.isTitle}>
        {item.label}
      </Text>
    );
  return (
    <div className={`Menu__item ${className}`} style={style}>
      {item.icon && <span className="Menu_icon">{item.icon}</span>}
      {itemLabel}
      {item.indicator && (
        <span className="Menu_indicator">{item.indicator}</span>
      )}
      {item.action && <span className="Menu_action">{item.action}</span>}

      {hasChildren && (
        <div className="Menu__body">
          <MenuItems items={item.items} />
        </div>
      )}
    </div>
  );
};

export default Menu;
