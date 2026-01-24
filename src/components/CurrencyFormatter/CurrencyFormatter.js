import React from 'react';
import { isNumeric } from '../../helpers/general';
// import * as styles from './CurrencyFormatter.module.css';

const CurrencyFormatter = ({
  amount,
  currency = 'VND',
  appendZero = false,
  useDollar = false,
}) => {
  const priceComponent = (
    <>
      <span style={{ fontWeight: 600, color: '#902F15' }}>Liên Hệ: 0977742047</span>
    </>
  );

  return priceComponent;
};

export default CurrencyFormatter;
