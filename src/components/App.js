import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const menuItems = [
  { id: 1, name: "Buttermilk Pancakes", category: "Breakfast", price: "$15.99", image: "pancakes.jpg" },
  { id: 2, name: "Diner Double", category: "Lunch", price: "$13.99", image: "burger.jpg" },
  { id: 3, name: "Godzilla Milkshake", category: "Shakes", price: "$6.99", image: "milkshake.jpg" },
  { id: 4, name: "Country Delight", category: "Lunch", price: "$20.99", image: "breakfast.jpg" },
  { id: 5, name: "Egg Attack", category: "Breakfast", price: "$22.99", image: "eggs.jpg" },
  { id: 6, name: "Oreo Dream", category: "Shakes", price: "$18.99", image: "oreo.jpg" },
];

const allCategories = ["All", ...new Set(menuItems.map((item) => item.category))];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container">
      <h1 className="title">Our Menu</h1>
      <div className="categories">
        {allCategories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Menu items={filteredItems} />
    </div>
  );
};

export default App;
