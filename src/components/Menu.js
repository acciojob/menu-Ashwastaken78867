import React, { useState } from "react";

const items = [
  { id: 1, name: "Pancakes", category: "Breakfast" },
  { id: 2, name: "Burger", category: "Lunch" },
  { id: 3, name: "Milkshake", category: "Shakes" },
];

const categories = ["All", "Breakfast", "Lunch", "Shakes"];

const Menu = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const filteredItems =
    filteredCategory === "All"
      ? items
      : items.filter((item) => item.category === filteredCategory);

  return (
    <div>
      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            id={`filter-btn-${index}`}
            onClick={() => setFilteredCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} data-test-id={`menu-item-${item.category.toLowerCase()}`}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
