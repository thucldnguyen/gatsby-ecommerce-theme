import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import * as styles from './Layout.module.css';

// CSS not modular here to provide global styles
import './Globals.css';

const Layout = ({ children, disablePaddingBottom = false }) => {
  return (
    <>
      <Header />
      <main
        className={`${styles.main} ${disablePaddingBottom === true ? styles.disablePaddingBottom : ''
          }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export const Head = () => (
  <>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
