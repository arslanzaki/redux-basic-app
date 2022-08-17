import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="product" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
