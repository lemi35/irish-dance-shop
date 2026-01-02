import {useState} from 'react'
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import data from './db/data.js';
import Card from './components/Card.js';
import "./index.css"

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  let filteredProducts = [];
  let filteredItems = [];
  let result

  // input filtering
  filteredItems = data.filter((item) =>
    item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


  // radio filtering
  const handleChange = (event) => {
  const value = event.target.value;

  if (value === "all") {
    setSelectedCategory(null); // reset filter
  } else {
    setSelectedCategory(value);
  }
};

  // button filtering
  const handleClick = (event) => {
  const value = event.target.value;

  if (value === "all") {
    setSelectedCategory(null); // reset filter
  } else {
    setSelectedCategory(value);
  }
};

  function FilteredData(data, selected, query) {
    let filteredData = data;

    if (query) {
      filteredData =filteredItems
    }
    if (selected) {
  filteredData = filteredData.filter(item => {
    const { category, company, price, title } = item;

    // category & company
    if (category === selected) return true;
    if (company === selected) return true;
    if (title === selected) return true;

    // price ranges
    if (selected === "0-50") return price <= 50;
    if (selected === "51-100") return price > 50 && price <= 100;
    if (selected === "101-200") return price > 100 && price <= 200;

    // all prices
    if (selected === "all") return true;

    return false;
  });
}



    return filteredData.map(({id, image, title, star, price, description, company, reviewes, category})=>(
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
  ));
  }

  result = filteredProducts = FilteredData(data, selectedCategory, query);

  return (
    <div>
        <>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
        </>
    </div>
  )
}
