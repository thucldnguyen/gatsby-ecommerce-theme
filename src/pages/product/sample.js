import React, { useState, useContext } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

import { generateMockProductData } from '../../helpers/mock';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const sampleProduct = generateMockProductData(1, 'macadamia')[0];
  const [qty, setQty] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct.colorOptions[0]
  );
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);
  const suggestions = generateMockProductData(4, 'woman');

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { label: 'Hạt macadamia', link: '/shop' },
              { label: `${sampleProduct.name}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={sampleProduct.gallery} />
            </div>
            <div className={styles.details}>
              <h1>{sampleProduct.name}</h1>
              <span className={styles.vendor}> by {sampleProduct.vendor}</span>

              <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={sampleProduct.price} />
              </div>

              <div>
                <SwatchList
                  swatchList={sampleProduct.colorOptions}
                  activeSwatch={activeSwatch}
                  setActiveSwatch={setActiveSwatch}
                />
              </div>

              <div className={styles.sizeContainer}>
                <SizeList
                  sizeList={sampleProduct.sizeOptions}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              </div>

              <div className={styles.quantityContainer}>
                <span>Quantity</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => showNotification()}
                    fullWidth
                    level={'primary'}
                  >
                    Add to Bag
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol={'heart'}></Icon>
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol={'heartFill'}></Icon>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
                <span>Product code: {sampleProduct.productCode}</span>
              </div>

              <div className={styles.informationContainer}>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'composition & care'}
                >
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'delivery & returns'}
                >
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
                <Accordion type={'plus'} customStyle={styles} title={'help'}>
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
          { /* 
          <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div> */ }

          <br></br>

          <img width='500' src="/products/logo.jpg"></img>

          <p>Thông tin sản phẩm </p> <br/>

          <p>

            <b> Hộ kinh doanh Rio Macca</b>
            <ul> 
              <li> Tên cơ sở: RIO Macca </li>
              <li> Địa chỉ: thôn Đoàn Kết, xã Đan Phượng, huyện Lâm Hà, tỉnh Lâm Đồng </li>
              <li> Điện thoại: 0977742047 </li>
              <li> Người đại diện: Nguyễn Thị Ánh </li>
              <li> Quy mô: hộ gia đình </li>
              <li> Năm thành lập: 2021 </li>
            </ul> 
          </p>

          <div>Hạt mắc ca có giá trị dinh dưỡng rất lớn trong thế giới các loại hạt, trong đó chứa nhiều đạm thực vật, omega 3, omega 6, omega 9 và có hơn 20 loại vitamin cùng khoáng chất cần thiết cho cơ thể. </div>
          <p>&nbsp;</p>

          <div><strong>HẠT MẮC CA LÀ GÌ?</strong></div>
          <p>&nbsp;</p>

          <div>Hạt mắc ca có xuất xứ từ Úc, sau này được trồng phổ biến ở nhiều nước khác, trong đó có Việt Nam. Tùy nguồn gốc xuất xứ mà hương vị của hạt mắc ca có thể có đôi chút khác biệt.</div>
          <p>&nbsp;</p>

          <div>Hạt mắc ca (tên tiếng Anh: macadamia) lấy từ cây mắc ca, loại cây nhiệt đới bản địa ở Úc. Hạt mắc ca còn có một số tên gọi phổ biến hơn là hạt Queensland hay hạt cây bụi. Vỏ hạt mắc ca thường rất cứng, có đỉnh nhọn và chứa một hoặc hai hạt nhỏ bên trong.</div>
          <p>&nbsp;</p>

          <div>Nhiều nơi trên thế giới sau này cũng bắt đầu trồng hạt mắc ca như Brazil, Nam Phi, Kenya... Những năm gần đây, ở Việt Nam cũng trồng được hạt mắc ca nhưng ít được ưa chuộng vì chất lượng không được tốt. Do điều kiện thổ nhưỡng và khí hậu nên hạt mắc ca nội địa thường bị sâu, lép hạt nên mọi người vẫn thường ưa chuộng hạt mắc ca xuất xứ từ Úc hoặc Nam Phi hơn. Hình ảnh bên dưới là hạt mắc ca được thu hoạch tại cơ sở Rio Macca Lâm Hà</div>
          <p>&nbsp;</p>

          <img width='500' src="/products/macca5.jpg"></img>
          <p>&nbsp;</p>

          <div><strong>Thành phần dinh dưỡng của hạt mắc ca</strong></div>
          <p>&nbsp;</p>
          <div>Hạt mắc ca cung cấp rất nhiều vitamin và khoáng chất thiết yếu cho cơ thể</div>
          <p>&nbsp;</p>
          <div>Trong 28g hạt mắc ca có chứa tới 201 calories, 21g chất béo, không chứa cholesterol và lượng natri không đáng kể. Ngoài ra, trong hạt còn có một số thành phần khoáng chất quan trọng:</div>
          <p>&nbsp;</p>
          <div>
          <ul>
            <li>1mg sắt (6% nhu cầu hàng ngày)</li>
            <li>2g protein (4% nhu cầu hàng ngày)</li>
            <li>2mg đồng (11% nhu cầu hàng ngày)</li>
            <li>4g chất xơ (10% nhu cầu hàng ngày)</li>
            <li>37mg magie (9% nhu cầu hàng ngày)</li>
            <li>53mg phố pho (5% nhu cầu hàng ngày)</li>
            <li>3mg thiamine (23% nhu cầu hàng ngày)</li>
            <li>1mg vitamin B6 (4% nhu cầu hàng ngày)</li>
          </ul>


          </div>
          <div>&nbsp;</div>
          <div><strong>Cách bảo quản hạt mắc ca</strong></div>
          <p>&nbsp;</p>
          <div>Bạn nên bảo quản hạt mắc ca ở nơi khô ráo, thoáng mát và tránh ánh sáng mặt trời trực tiếp. Hạt chưa xé bịch thường có thể để được khoảng 6 tháng kể từ ngày sản xuất. Sau khi đã xé bịch, bạn nên ăn hết hạt trong vòng 3 &ndash; 5 ngày hoặc cho vào lọ kín để tủ lạnh ăn trong vòng 2 tháng. Hình bên dưới là dầu macca do Rio Macca Lâm Hà sản xuất.</div>

          <img width='500' src="/products/macca6.jpg"></img>
          <p>&nbsp;</p>

          <div><strong>TÁC DỤNG CỦA HẠT MẮC CA </strong></div>
          <p>&nbsp;</p>
          
          <div>Hạt mắc ca không chỉ hấp dẫn với hương vị béo bùi mà giá trị của loại hạt này là ở hàm lượng chất dinh dưỡng cao, mang đến nhiều lợi ích cho sức khỏe.</div>
          <div>&nbsp;</div>

          <div><strong>Giảm nguy cơ mắc bệnh tim</strong></div>
          <p>&nbsp;</p>
          <div>Hiệp hội Tim mạch Hoa Kỳ đưa ra nhận định rằng ăn hạt mắc ca thường xuyên có thể giảm nguy cơ tử vong sớm, đặc biệt là những người ăn hạt mắc ca ít nhất 8 lần mỗi tuần. Một nghiên cứu thực hiện năm 2017 ở nam giới có lượng cholesterol cao cũng phát hiện thấy nguy cơ mắc bệnh mạch vành giảm sau 4 tuần ăn hạt mắc ca.</div>
          
          <p>&nbsp;</p>
          <div>Axit béo bão hòa đơn có trong loại hạt này đặc biệt rất tốt cho tim mạch, trong đó axit béo palmitoleic là axit có khả năng:</div>
          <div>
          <ul>
            <li>Hạ huyết áp</li>
            <li>Giảm nhiễm trùng</li>
            <li>Giảm nồng độ lipid</li>
            <li>Tăng cường sức khỏe tim mạch</li>
            <li>Hạ lượng triglyceride (triglyceride cao có thể gây xơ vữa động mạch, đột quỵ, đau tim).</li>
          </ul>
          </div>
        
        <div><strong>Cải thiện hội chứng tiểu đường</strong></div>
        <p>&nbsp;</p>
        
        <div>Hội chứng chuyển hóa là một nhóm các tình trạng có khả năng gia tăng nguy cơ mắc bệnh tiểu đường, đột quỵ và tim mạch. Các tình trạng thường gặp là huyết áp cao, đường huyết cao, nồng độ cholesterol HDL cao, lượng triglycerid cao và lượng mỡ bụng dư thừa.</div>
        <div>&nbsp;</div>

        <div>Một số nghiên cứu chỉ ra rằng hợp chất MUFAs (chất béo đơn không bão hòa) như các chất có trong hạt mắc ca có thể làm giảm các nguy cơ mắc hội chứng chuyển hóa hoặc giảm thiểu tác hại ở những người đang mắc phải. Một nghiên cứu từ năm 2016 đã cho thấy một chế độ ăn có hàm lượng chất MUFAs cao có thể làm giảm các yếu tố nguy cơ của bệnh tiểu đường tuýp 2.

        <div><strong>Giảm nguy cơ mắc bệnh ung thư</strong></div>
        <p>&nbsp;</p>
        <div>Hạt mắc ca có chứa hàm lượng lớn một loại vitamin E gọi là tocotrienols có khả năng chống lại ung thư. Ngoài ra, loại hạt này còn có chứa hợp chất thực vật flavonoid có thể ngăn ngừa ung thư bằng cách tiêu diệt các gốc tự do trong cơ thể.</div>
        
        </div>

        </Container>



        { /* 
        <div className={styles.attributeContainer}>
          <Split
            image={'/cloth.png'}
            alt={'attribute description'}
            title={'Sustainability'}
            description={
              'We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections.'
            }
            ctaText={'learn more'}
            cta={() => navigate('/blog')}
            bgColor={'var(--standard-light-grey)'}
          />
        </div>
        */ }
      </div>
    </Layout>
  );
};

export default ProductPage;
