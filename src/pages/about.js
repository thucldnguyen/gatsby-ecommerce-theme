import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/coso1.jpeg'}
        // title={`Rio Farm \n Thương hiệu uy tín từ 2021`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Lịch Sử
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Giá trị cốt lõi
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Cơ sở sản xuất
          </ThemeLink>
        </div>

        <Container size={'narrow'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Được thành lập từ 2021, Rio Macca hay Rio Farm là thương hiệu nông
              sản sạch hàng đầu Lâm Hà, Lâm Đồng Chúng tôi luôn tự hào đem đến
              cho người tiêu dùng Việt Nam những sản phẩm nông sản chất lượng
              cao và thái độ phục vụ chu đáo.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/coso2.jpeg'}></img>
        </div>

        <Container>
          <div className={styles.splitSection}>
            <div className={styles.content} ref={valuesRef}>
              <h3>Giá trị cốt lõi</h3>
              <p>
                Nắm bắt được nhu cầu thị hiếu của người tiêu dùng Việt Nam, Rio
                Macca được thành lập để đem đến cho người tiêu dùng Việt Nam
                những mặt hàng nông sản chất lượng cao với nguồn gốc xuất xứ rõ
                ràng.
              </p>
              <ol>
                <li>Minh bạch nguồn gốc from farm to table</li>
                <li>Chất lượng phản ánh đúng giá thành</li>
                <li>Nguyên liệu tại chỗ</li>
              </ol>
            </div>
            <div className={styles.imageSide}>
              <img alt={'founder'} src={'/founder.jpeg'}></img>
            </div>
          </div>

          <div className={styles.splitSection}>
            <div className={styles.content} id={'#sustainability'} ref={sustainabilityRef}>
              <h3>Cơ sở sản xuất đạt tiêu chuẩn</h3>
              <p>
                Cơ sở sản xuất của Rio Macca đặt tại địa phận xã Đan Phượng,
                huyện Lâm Hà, tỉnh Lâm Đồng, Việt Nam. Với diện tích rộng, sạch
                sẽ và nhiều trang thiết bị hiện tại, Rio Macca đã cho ra đời
                hàng loạt những lô sản phẩm nông sản chất lượng được người tiêu
                dùng Việt Nam ưa chuộng.
              </p>
            </div>
            <div className={styles.imageSide}>
              <img alt={'shirt backwards'} src={'/coso3.jpeg'}></img>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>Về Rio Macca | Thương hiệu uy tín từ 2021</title>;
