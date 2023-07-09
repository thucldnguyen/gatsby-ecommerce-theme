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
              title={'Cơ sở Rio Macca có đạt tiêu chuẩn chất lượng?'}
              image={'/coso2.jpeg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Cơ cở sản xuất của Rio Macca đạt đủ các tiêu chuẩn về vệ sinh
                  an toàn thực phẩm 
                </p>
                <p className={styles.blogParagraph}>
                  Được cơ quan chức năng có thẩm quyền cấp giấy phép kinh doanh vào năm
                  2021, đến nay Rio Macca đã có 3 năm kinh nghiệm sản xuất hạt macca
                  sấy. 
                </p>
                <p className={styles.blogParagraph}>
                  Cơ sở của Rio Macca đạt chất lượng vệ sinh an toàn thực phẩm cao nhất.
                  Hạt macca luôn được sàn lọc cẩn thận về size lẫn độ ẩm và nguồn gốc. 
                </p>
                
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={'/coso5.jpeg'} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/riomacca2.jpeg'} alt={'sample2'} />
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
