import React from "react";
import PropTypes from "prop-types";
import Heading from "../Heading";
import "./Menu.scss";

function getItemsBySection(items = []) {
  return items.reduce((accum, item) => {
    if (!item.section) {
      return accum;
    }
    if (!accum[item.section]) {
      accum[item.section] = [];
    }

    return {
      ...accum,
      [item.section]: [...accum[item.section], item]
    };
  }, {});
}

const Menu = ({ className = "", style = {}, items = [], sections = [] }) => {
  const itemsBySection = getItemsBySection(items);

  return (
    <div className={`Menu ${className}`} style={style}>
      {sections.map(section => {
        return (
          <MenuSection section={section} items={itemsBySection[section.key]} />
        );
      })}
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      section: PropTypes.string,
      icon: PropTypes.node,
      indicator: PropTypes.node,
      url: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      action: PropTypes.node
    })
  )
};

const MenuSection = ({
  children,
  className = "",
  style = {},
  items = [],
  section = {}
}) => {
  return (
    <div className={`Menu__section ${className}`} style={style}>
      <div className="Menu__section__header">
        <Heading element="h6">{section.title}</Heading>
        {section.action}
      </div>
      <div className="Menu__section__items">
        {items.map(item => {
          return (
            <MenuSectionItem
              key={`${item.section}-${item.label}`}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

const MenuSectionItem = ({
  children,
  className = "",
  style = {},
  item = {}
}) => {
  if (item.url) {
    return (
      <div className="Menu__section__item">
        <a href={item.url}>
          {item.icon || ""}
          {item.label}
        </a>
        {item.indicator}
      </div>
    );
  }

  return (
    <div className="Menu__section__item">
      <button onClick={item.onClick}>
        {item.icon || ""}
        {item.label}
      </button>
      {item.indicator}
    </div>
  );
};

export default Menu;
