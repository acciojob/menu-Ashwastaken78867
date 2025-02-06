import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu">
      {items.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} className="menu-img" />
          <div className="menu-info">
            <h4 className="menu-name">{item.name} <span className="menu-price">{item.price}</span></h4>
            <p className="menu-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
