import React, { useContext } from 'react';
import { Link } from 'gatsby';

import CartItem from '../components/CartItem';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import Icon from '../components/Icons/Icon';
import OrderSummary from '../components/OrderSummary';
import { CartContext } from '../context/CartProvider';

import * as styles from './cart.module.css';

const CartPage = (props) => {
  const { cart } = useContext(CartContext);

  return (
    <Layout>
      <div className={styles.contentContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.headerContainer}>
            <div className={styles.shoppingContainer}>
              <Link className={styles.shopLink} to={'/'}>
                <Icon symbol={'arrow'}></Icon>
                <span className={styles.continueShopping}>
                  Tiếp tục mua sắm
                </span>
              </Link>
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <h3>Giỏ hàng của tôi</h3>
            <div className={styles.cartContainer}>
              <div className={styles.cartItemsContainer}>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <CartItem key={item.productCode} {...item} />
                  ))
                ) : (
                  <p>Giỏ hàng của bạn đang trống.</p>
                )}
              </div>
              <OrderSummary />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default CartPage;
