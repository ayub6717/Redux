// Products.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.products);
  const prod = new Map(Object.entries(products));


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {prod?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {/* Render other product details */}
        </div>
      ))}
    </div>
  );
};

export default Products;
