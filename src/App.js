import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data.js";
import Card from "./components/Card.js";
import "./index.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Handle text input search
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle radio or button filter
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value === "all" ? null : value);
  };

  // Filter data based on query and selected category
  const getFilteredData = () => {
    let filtered = data;

    // Text search
    if (query) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category / company / title / price filtering
    if (selectedCategory) {
      filtered = filtered.filter((item) => {
        const { category, company, title, price } = item;

        if (category === selectedCategory) return true;
        if (company === selectedCategory) return true;
        if (title === selectedCategory) return true;

        // Price ranges
        if (selectedCategory === "0-50") return price <= 50;
        if (selectedCategory === "51-100") return price > 50 && price <= 100;
        if (selectedCategory === "101-200") return price > 100 && price <= 200;

        return false;
      });
    }

    return filtered.map(
      ({
        id,
        image,
        title,
        star,
        price,
        description,
        company,
        reviewes,
        category,
      }) => (
        <Card
          key={id}
          image={image}
          title={title}
          star={star}
          price={price}
          description={description}
          company={company}
          reviewes={reviewes}
          category={category}
        />
      )
    );
  };

  const result = getFilteredData();

  return (
    <div>
      <Sidebar handleChange={handleFilterChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleFilterChange} />
      <Products result={result} />
    </div>
  );
}
