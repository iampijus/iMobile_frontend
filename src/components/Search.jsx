import React from "react";

const Search = (props) => {
  return (
    <>
      <input
        type="text"
        className="form-control mt-5 w-50 mx-auto border-dark"
        style={{ height: "50px" }}
        placeholder="SEARCH FOR PRODUCTS"
        onChange={(event) => props.searchProducts(event.target.value)}
      />
    </>
  );
};

export default Search;
