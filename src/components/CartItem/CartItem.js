import React, { useContext } from 'react';

import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';
import { CartContext } from '../../context/CartProvider';

import * as styles from './CartItem.module.css';
import { navigate } from 'gatsby';

const CartItem = (props) => {
  const { image, alt, name, price, productCode, quantity } = props;
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate(`/product/${productCode === 'macca' ? 'macca' : 'sample'}`)}
      >
        <img src={image} alt={alt}></img>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.adjustItemContainer}>
        <AdjustItem
          qty={quantity}
          setQty={(newQty) => updateQuantity(productCode, newQty)}
        />
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={price} appendZero />
      </div>
      <div className={styles.removeContainer}>
        <RemoveItem onClick={() => removeFromCart(productCode)} />
      </div>
    </div>
  );
};

export default CartItem;
