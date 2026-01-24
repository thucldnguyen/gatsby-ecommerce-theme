import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'NEWS'}
              title={'Lô hàng R20230701 vừa xuất xưởng'}
              image={'/coso2.jpeg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Lô hàng R20230701 của nhà Rio Macca vừa hoàn tất sấy và đóng gói.
                  Với hơn 300 sản phẩm, lô hàng này có hạn sử dụng 1 năm kể từ ngày
                  sản xuất. Quý khách hàng có quan tâm nhu cầu xin liên hệ số điện thoại
                  0977742047 để được tư vấn mua hàng nhé!
                </p>

              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={'/coso3.jpeg'} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/riomacca.jpeg'} alt={'sample2'} />
                </div>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
