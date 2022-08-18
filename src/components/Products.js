import React, { useEffect } from "react";
import { add } from "./../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../store/productSlice"; //THUNK
import { STATUSES } from "./../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);

  const { data: products, status } = useSelector((state) => state.product);

  // const fetchProducts = async () => {
  //   const api = await fetch("https://fakestoreapi.com/products");
  //   const data = await api.json();
  //   setProducts(data);
  //   console.log(data);
  // };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  function handleAdd(product) {
    dispatch(add(product));
  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  } else if (status === STATUSES.ERROR) {
    return <h2>Something Went Wrong...</h2>
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="product" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
