import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const product = urlParams.get('product');
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Mua hàng</h4>
        <p>
          Vui lòng nhập đủ thông tin dưới đây. Chúng tôi sẽ liên hệ với bạn
          trong thời gian sớm nhất.
        </p>
      </div>
      {/* <div className={styles.section}>
        <h4>Sản phẩm</h4>
        <ul>
          <li>Sản phẩm: {product}</li>
          <li>Số lượng: 1</li>
        </ul>
      </div> */}

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Tên'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Điện thoại'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Ghi chú'}
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            Mua
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
