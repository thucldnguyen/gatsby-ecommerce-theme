import React, { useContext } from 'react';

import { navigate } from 'gatsby';
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';
import { CartContext } from '../../context/CartProvider';

import * as styles from './MiniCartItem.module.css';

const MiniCartItem = (props) => {
  const { image, alt, name, price, productCode, quantity } = props;
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate(`/product/${productCode === 'macca' ? 'macca' : 'sample'}`)}
      >
        <img src={image} alt={alt} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{name}</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={price} />
          </div>
        </div>
        <div className={styles.adjustItemContainer}>
          <AdjustItem
            qty={quantity}
            setQty={(newQty) => updateQuantity(productCode, newQty)}
          />
        </div>
      </div>
      <div className={styles.closeContainer}>
        <RemoveItem onClick={() => removeFromCart(productCode)} />
      </div>
    </div>
  );
};

export default MiniCartItem;
