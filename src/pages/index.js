import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/product/macca');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/macca_farm.jpg'}
        title={'Rio Farm'}
        subtitle={'Nông sản sạch'}
      // ctaText={'Mua Ngay'}
      // ctaAction={goToShop}
      />
      {/* Message Container */}
      {/* <div className={styles.messageContainer}>
        <p>
          <span className={styles.gold}>Rio Macca</span> Lâm Hà - Lâm Đồng
        </p>
      </div> */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Về Chúng Tôi'}
        quote={
          '“Rio Macca là doanh nghiệp cung cấp hạt macadamia sấy hàng đầu Lâm Hà - Lâm Đồng.”'
        }
      />
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Sản Phẩm'} />
          <ProductCollectionGrid />
        </Container>
      </div>
      {/* New Arrivals
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>
      Highlight
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Luxury Knitwear'}
            description={`This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>
      Promotion
      <div className={styles.promotionContainer}>
        <Hero image={'/banner2.png'} title={`-50% off \n All Essentials`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div> */}
      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Blog Rio Macca'} subtitle={'Những bài viết mới nhất về Rio Macca'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div> 
      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/antoanthucpham.webp'}
          title={'Nói không với hàng kém vệ sinh'}
          subtitle={
            'Vệ sinh an toàn thực phẩm là ưu tiên hàng đầu của Rio Macca Lâm Hà.'
          }
          ctaText={'Mua Ngay'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
          ctaAction={goToShop}
        />
      </div> 
      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Rio Macca'}
          subtitle={'Hãy tag chúng tôi trên social media: @riofarm'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/coso2.jpeg`} alt={'social media 1'} />
          <img src={`/social/coso1.jpeg`} alt={'social media 2'} />
          <img src={`/social/rio_banner.jpg`} alt={'social media 3'} />
          <img src={`/social/rio_banner2.jpg`} alt={'social media 4'} />
        </div>
      </div> 
      <AttributeGrid /> 
    </Layout>
  );
};

export default IndexPage;
