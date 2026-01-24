import React, { useState, useContext } from 'react';
import * as styles from './sample.module.css';

import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import Layout from '../../components/Layout/Layout';
import { navigate } from 'gatsby';

import { generateMockProductData } from '../../helpers/mock';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';
import { CartContext } from '../../context/CartProvider';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const { addToCart } = useContext(CartContext);
  const sampleProduct = generateMockProductData(1, 'macca')[0];
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart(sampleProduct, qty);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
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
                <CurrencyFormatter amount={sampleProduct.price} />
              </div>

              <div className={styles.quantityContainer}>
                <span>Số lượng</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={handleAddToCart}
                    fullWidth
                    level={'primary'}
                  >
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>

              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
                <span>Product code: {sampleProduct.productCode}</span>
              </div>

              <div className={styles.ProductPage}>
                <br />
                <h3>Hạt mắc ca là gì?</h3>
                <br />
                <p>
                  {' '}
                  Hạt mắc ca (tên tiếng Anh: macadamia) lấy từ cây mắc ca, loại
                  cây nhiệt đới bản địa ở Úc. Hạt mắc ca còn có một số tên gọi
                  phổ biến hơn là hạt Queensland hay hạt cây bụi. Vỏ hạt mắc ca
                  thường rất cứng, có đỉnh nhọn và chứa một hạt nhỏ bên
                  trong. Hạt mắc ca có giá trị dinh dưỡng rất lớn trong thế giới
                  các loại hạt, trong đó chứa nhiều đạm thực vật, omega 3, omega
                  6, omega 9 và có hơn 20 loại vitamin cùng khoáng chất cần
                  thiết cho cơ thể.{' '}
                </p>

                <br />
                <p>
                  {' '}
                  Hạt mắc ca có xuất xứ từ Úc, sau này được trồng phổ biến ở
                  nhiều nước khác, trong đó có Việt Nam. Tùy nguồn gốc xuất xứ
                  mà hương vị của hạt mắc ca có thể có đôi chút khác biệt.
                </p>
                <br />

                <p>
                  Nhiều nơi trên thế giới sau này cũng bắt đầu trồng hạt mắc ca
                  như Brazil, Nam Phi, Kenya... Những năm gần đây, ở Việt Nam
                  cũng trồng được hạt mắc ca. Do điều kiện thổ nhưỡng và khí hậu thuận lợi
                  nên hạt mắc ca Lâm Hà - Lâm Đồng đạt chất lượng thơm béo khá cao sánh ngang với bạn bè quốc tế.
                  Hình ảnh bên dưới là hạt mắc ca được thu hoạch tại cơ sở Rio
                  Macca Lâm Hà - Lâm Đồng.
                </p>
                <br />

                <img width="350" src="/products/macca5.jpg"></img>
                <br />

                <h3>Thành phần dinh dưỡng của hạt mắc ca</h3>
                <br />
                <p>
                  Hạt mắc ca cung cấp rất nhiều vitamin và khoáng chất thiết yếu
                  cho cơ thể. Trong 28g hạt mắc ca có chứa tới 201 calories, 21g
                  chất béo, không chứa cholesterol và lượng natri không đáng kể.
                  Ngoài ra, trong hạt còn có một số thành phần khoáng chất quan
                  trọng:
                </p>
                <br />

                <ul style={{ listStyleType: 'circle', marginLeft: 10 }}>
                  <li>1mg sắt (6% nhu cầu hàng ngày)</li>
                  <li>2g protein (4% nhu cầu hàng ngày)</li>
                  <li>2mg đồng (11% nhu cầu hàng ngày)</li>
                  <li>4g chất xơ (10% nhu cầu hàng ngày)</li>
                  <li>37mg magie (9% nhu cầu hàng ngày)</li>
                  <li>53mg phố pho (5% nhu cầu hàng ngày)</li>
                  <li>3mg thiamine (23% nhu cầu hàng ngày)</li>
                  <li>1mg vitamin B6 (4% nhu cầu hàng ngày)</li>
                </ul>

                <h3>Cách bảo quản hạt mắc ca</h3>
                <br />
                <p>
                  Bạn nên bảo quản hạt mắc ca ở nơi khô ráo, thoáng mát và tránh
                  ánh sáng mặt trời trực tiếp. Hạt chưa xé bịch thường có thể để
                  được khoảng 6 tháng kể từ ngày sản xuất. Sau khi đã xé bịch,
                  bạn nên ăn hết hạt trong vòng 3 &ndash; 5 ngày hoặc cho vào lọ
                  kín để tủ lạnh ăn trong vòng 2 tháng. Hình bên dưới là dầu
                  macca do Rio Macca Lâm Hà sản xuất.
                </p>
                <br />
                <img width="350" src="/products/macca6.jpg"></img>
                <br />

                <h3>Tác dụng của hạt mắc ca</h3>
                <br />

                <p>
                  Hạt mắc ca không chỉ hấp dẫn với hương vị béo bùi mà giá trị
                  của loại hạt này là ở hàm lượng chất dinh dưỡng cao, mang đến
                  nhiều lợi ích cho sức khỏe.
                </p>
                <br />

                <p>
                  <strong>Giảm nguy cơ mắc bệnh tim</strong>{' '}
                </p>
                <br />
                <p>
                  Hiệp hội Tim mạch Hoa Kỳ đưa ra nhận định rằng ăn hạt mắc ca
                  thường xuyên có thể giảm nguy cơ tử vong sớm, đặc biệt là
                  những người ăn hạt mắc ca ít nhất 8 lần mỗi tuần. Một nghiên
                  cứu thực hiện năm 2017 ở nam giới có lượng cholesterol cao
                  cũng phát hiện thấy nguy cơ mắc bệnh mạch vành giảm sau 4 tuần
                  ăn hạt mắc ca.
                </p>

                <br />
                <p>
                  Axit béo bão hòa đơn có trong loại hạt này đặc biệt rất tốt
                  cho tim mạch, trong đó axit béo palmitoleic là axit có khả
                  năng:
                </p>
                <br />

                <p>
                  <ol>
                    <li>Hạ huyết áp</li>
                    <li>Giảm nhiễm trùng</li>
                    <li>Giảm nồng độ lipid</li>
                    <li>Tăng cường sức khỏe tim mạch</li>
                    <li>
                      Hạ lượng triglyceride (triglyceride cao có thể gây xơ vữa
                      động mạch, đột quỵ, đau tim).
                    </li>
                  </ol>
                </p>

                <br />
                <p>
                  <strong>Cải thiện hội chứng tiểu đường</strong>
                </p>
                <br />

                <p>
                  Hội chứng chuyển hóa là một nhóm các tình trạng có khả năng
                  gia tăng nguy cơ mắc bệnh tiểu đường, đột quỵ và tim mạch. Các
                  tình trạng thường gặp là huyết áp cao, đường huyết cao, nồng
                  độ cholesterol HDL cao, lượng triglycerid cao và lượng mỡ bụng
                  dư thừa.
                </p>
                <br />

                <p>
                  Một số nghiên cứu chỉ ra rằng hợp chất MUFAs (chất béo đơn
                  không bão hòa) như các chất có trong hạt mắc ca có thể làm
                  giảm các nguy cơ mắc hội chứng chuyển hóa hoặc giảm thiểu tác
                  hại ở những người đang mắc phải. Một nghiên cứu từ năm 2016 đã
                  cho thấy một chế độ ăn có hàm lượng chất MUFAs cao có thể làm
                  giảm các yếu tố nguy cơ của bệnh tiểu đường tuýp 2.
                </p>

                <br />
                <p>
                  <strong>Giảm nguy cơ mắc bệnh ung thư</strong>
                </p>
                <br />

                <p>
                  Hạt mắc ca có chứa hàm lượng lớn một loại vitamin E gọi là
                  tocotrienols có khả năng chống lại ung thư. Ngoài ra, loại hạt
                  này còn có chứa hợp chất thực vật flavonoid có thể ngăn ngừa
                  ung thư bằng cách tiêu diệt các gốc tự do trong cơ thể.
                </p>

                <br />
                <h3> Cơ sở sản xuất Rio Macca </h3>

                <br />
                <img width="350" src="/coso1.jpeg"></img>
                <br />
                <br />
                <img width="350" src="/coso2.jpeg"></img>
                <br />
                <br />
                <img width="350" src="/coso3.jpeg"></img>
                <br />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ProductPage;
