import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';

const Product = ({ title, basePrice, colors, sizes, name }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  console.log(currentColor);
  console.log(currentSize);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = useMemo(() => {
    const result = sizes.find(size => size.name === currentSize);
    return basePrice + result.additionalPrice;
  }, [basePrice, currentSize, sizes]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`  Summary
    ===========
    Name: ${title}
    Price: ${getPrice}
    Size: ${currentSize}
    Color: ${currentColor}
    `);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} prepareColorClassName={prepareColorClassName} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} currentColor={currentColor} currentSize={currentSize} sizes={sizes} colors={colors} />
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  result: PropTypes.number.isRequired
}

export default Product;