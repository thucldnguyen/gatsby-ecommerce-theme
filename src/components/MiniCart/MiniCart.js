import { Link, navigate } from 'gatsby';
import React, { useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';
import { CartContext } from '../../context/CartProvider';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const { cart, cartTotal } = useContext(CartContext);

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Giỏ hàng của tôi</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <MiniCartItem key={item.productCode} {...item} />
          ))
        ) : (
          <p className={styles.emptyMessage}>Giỏ hàng đang trống</p>
        )}
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Tổng cộng</span>
            <span>
              <CurrencyFormatter amount={cartTotal} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Phí vận chuyển sẽ được tính khi thanh toán
          </span>
          <Button
            disabled={cart.length === 0}
            onClick={() => navigate('/cart')}
            level={'primary'}
            fullWidth
          >
            Thanh toán
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/'}>Tiếp tục mua sắm</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
