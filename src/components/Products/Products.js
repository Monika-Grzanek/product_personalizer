import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';


const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product key={product.id} {...products[0]} />)}
      {products.map(product => <Product key={product.id} {...products[1]} />)}
    </section>
  );
};

Products.propTypes = {
  name: PropTypes.string, 
  title: PropTypes.string,
  basePrice: PropTypes.number,
}

export default Products;