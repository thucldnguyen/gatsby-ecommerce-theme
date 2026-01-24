import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import { CartContext } from '../../context/CartProvider';

import * as styles from './OrderSummary.module.css';

const OrderSummary = (props) => {
  const { cartTotal, cart } = useContext(CartContext);

  return (
    <div className={styles.root}>
      <div className={styles.orderSummary}>
        <span className={styles.title}>Tóm tắt đơn hàng</span>
        <div className={styles.totalContainer}>
          <span>Chi phí: </span>
          <span>
            <CurrencyFormatter amount={cartTotal} appendZero />
          </span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <Button
          disabled={cart.length === 0}
          onClick={() => navigate('/checkout')}
          fullWidth
          level={'primary'}
        >
          Tiếp tục thanh toán
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/'}>TIẾP TỤC MUA SẮM</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
