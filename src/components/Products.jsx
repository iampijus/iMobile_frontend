import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Search from "./Search.jsx";
import SearchView from "./SearchView.jsx";
import axios from "axios";

const Products = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Fetch the product details from the database
  const url = "https://imobile-backend.onrender.com/products";

  const fetchProductsData = async (url) => {
    try {
      const res = await axios.get(url);
      const products = await res.data;
      setData(products);
      setFilter(products);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchProductsData(url);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // to filter the product brand wise
  const filterProduct = async (brand) => {
    const res = await axios.post("https://imobile-backend.onrender.com/filterproducts", {
      brand,
    });
    const updatedData = await res.data;
    setFilter(updatedData);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 700);
  };

  // filter product by search box
  const searchProducts = (value) => {
    // setting the show search condition
    if (value === "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
    //  code to get the products on search box
    setSearchText(value);
    const newList = data.filter((item) => {
      if (searchText === "") {
        return item;
      } else if (item.title.toUpperCase().includes(searchText.toUpperCase())) {
        return item;
      }
    });
    setFilter(newList);
  };

  // to show the loading when the data is fetching
  const Loading = () => {
    return (
      <p className="text-center fs-4" style={{ margin: "17vh 0 35vh" }}>
        Loading...
      </p>
    );
  };

  // category menu
  const CategoryMenu = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("all")}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("samsung")}
          >
            Samsung
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("apple")}
          >
            iPhones
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("redmi")}
          >
            Redmi
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("vivo")}
          >
            Vivo
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("realme")}
          >
            Realme
          </button>
        </div>
      </>
    );
  };
  // to show the products
  const ShowProducts = () => {
    return (
      <>
        {/* displaying the cards */}
        {filter.map((item) => {
          return (
            <Cards
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              category={item.category}
              id={item.id}
              key={item.id}
              // addToCart={addToCart}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      {/* search box */}
      <Search searchProducts={searchProducts} />
      {/* Products */}
      {showSearch ? (
        <SearchView filter={filter} />
      ) : (
        <div>
          <div className="my-4 py-5 mx-3">
            <div className="row">
              <div className="col-12 mb-4">
                <h1 className="display-6 fw-bolder text-center">
                  Latest Products
                </h1>
                <hr />
              </div>
              <CategoryMenu />
            </div>

            <div className="row justify-content-center">
              {loading ? <Loading /> : load ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
