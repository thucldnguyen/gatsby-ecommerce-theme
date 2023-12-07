import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderMap = () => {
    return `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.8041489407865!2d108.1795899743631!3d11.708279741316327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31715bbfbfaa993f%3A0xc88d819f06a65760!2sRio%20macca!5e0!3m2!1sen!2s!4v1701957242833!5m2!1sen!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  };

  return (
    <div className={styles.root}>
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            <div className={styles.aboutUs}>
              <h6>Liên hệ:</h6>
              <ul style={{ listStyleType: 'circle' }}>
                <li>Hộ kinh doanh: RIO MACCA</li>
                <li>
                  Địa chỉ: Thôn Đoàn Kết, xã Đan Phượng, huyện Lâm Hà, tỉnh Lâm
                  Đồng
                </li>
                <li>Số điện thoại: 0977742047</li>
                <li>Người đại diện: Nguyễn Thị Ánh</li>
                <li>Quy mô: Hộ gia đình</li>
                <li>Năm thành lập: 2021</li>
              </ul>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div className={styles.socialContainer}>
                <div
                  onClick={() => handleSocialClick('facebook')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'facebook'}></Icon>
                </div>
                <div
                  onClick={() => handleSocialClick('email')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'email'}></Icon>
                </div>
                <div
                  onClick={() => handleSocialClick('phone')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'phone'}></Icon>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: renderMap() }}></div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.copyrightContainer}>
        <span>
          {new Date().getFullYear()} (c) . Built by{' '}
          <Button target={true} href="https://www.thucldnguyen.com">
            Thuc Nguyen & Hao Nguyen
          </Button>{' '}
          Powered by{' '}
          <Button target={true} href="www.netlify.com">
            Netlify
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
