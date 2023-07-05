import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Giao hàng nhanh trên toàn quốc'}
        subtitle={'Call now'}
      />
      <Attribute
        icon={'cycle'}
        title={'Thân thiện môi trường'}
        subtitle={'Đóng gói chủ yếu bằng giấy'}
      />
      <Attribute
        icon={'creditcard'}
        title={'Thanh toán an toàn'}
        subtitle={'Chuyển khoản ngân hàng hoặc Momo'}
      />
    </div>
  );
};

export default AttributeGrid;
