import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/products/macca1.jpg'}
        title={'Macca Sấy'}
        text={'Xem thêm'}
        link={'/product/macca'}
      />
      <ProductCollection
        image={'/products/macca4.jpg'}
        title={'Macca Sấy'}
        text={'Xem thêm'}
        link={'/product/macca'}
      />
      {/* <ProductCollection
        image={'/products/macca6.jpg'}
        title={'Dầu Macca'}
        text={'Xem thêm'}
        link={'/product/macca-oil'}
      />
      <ProductCollection
        image={'/products/hat_mix.jpg'}
        title={'Hạt Mix'}
        text={'Xem thêm'}
        link={'/product/mix-nuts'}
      /> */}
    </div>
  );
};

export default ProductCollectionGrid;
