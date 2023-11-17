import { useEffect } from "react";
import "./index.css";
import axios from "axios";
import Product from "../Product";
import { useState } from "react";

const OurProducts = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("All");
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOPen] = useState(false);
  const [text, setText] = useState("");
  //const [sortName, setSortName] = useState(null)

  const getProducts = async () => {
    const res = await axios.get("https://northwind.vercel.app/api/products");
    console.log(res.data);
    setData(res.data);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (value) => {
    setCategory(value);
  };

  const handleSortClick = () => {
    const sortByName = [...data].sort((a, b) =>
      {
        const aToZName = a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        const zToAName =  a.name > b.name ? -1 : a.name < b.name ? 1 : 0
        return isOpen ? aToZName : zToAName
      }
    );
    setIsOPen(!isOpen)
    setData(sortByName);
  };

  const handleSortClickPrice = () => {
    const sortByPrice = [...data].sort((a, b) => {
      const aPrice = parseFloat(a.unitPrice);
      const bPrice = parseFloat(b.unitPrice);
      return isClick ? aPrice - bPrice : bPrice - aPrice;
    });
    setIsClick(!isClick);
    setData(sortByPrice);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <div className="product-top">
        <h1>Products</h1>
        <div className="filters">
          <button
            onClick={(e) => handleClick(e.target.value)}
            value="All"
            className="btn"
          >
            Show All
          </button>
          <button
            className="btn"
            onClick={(e) => handleClick(e.target.value)}
            value="1"
          >
            Condiments
          </button>
          <button
            className="btn"
            onClick={(e) => handleClick(e.target.value)}
            value="2"
          >
            Beverages
          </button>
          <button
            className="btn"
            onClick={(e) => handleClick(e.target.value)}
            value="3"
          >
            Confections
          </button>
          <button
            className="btn"
            onClick={(e) => handleClick(e.target.value)}
            value="4"
          >
            Dairy Products
          </button>
          <div className="search-input">
            <input type="text" value={text} onChange={handleChange} />
          </div>
          <div className="sort">
            <button onClick={() => handleSortClick()}>A-Z</button>
            <button onClick={() => handleSortClickPrice()}>
              Sort by Price
            </button>
          </div>
        </div>
      </div>
      <div className="products-container">
        {data &&
          data
            .filter((x) =>
              x.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
            )
            .filter(
              (product) =>
                category === "All" || product.categoryId === parseInt(category)
            )
            .map((product) => <Product key={product?.id} {...product} />)}
      </div>
    </div>
  );
};

export default OurProducts;
