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
              category={'Macadamia'}
              title={'3 lý do nên chọn hạt macca sấy của Rio Macca'}
              image={'/antoanthucpham.webp'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Trong vô số doanh nghiệp sản xuất hạt macadamia sấy ở Việt Nam,
                  Rio Macca nổi bật với chất lượng tuyệt hảo từ khâu chọn lọc đầu vào
                  đến khâu chế biến và đóng gói.
                </p>
                <p className={styles.blogParagraph}>
                  Hạt Macadamia là loại hạt có hương vị tinh tế, giống như bơ, có vị bùi ngậy, 
                  đem lại cảm giác mới lạ cho những người lần đầu được thưởng thức. Giống như hầu 
                  hết các loại hạt khác, hạt macca rất giàu chất dinh dưỡng và các hợp chất thực vật 
                  có lợi cho sức khỏe. Loại hạt này được coi như là một phương thuốc kỳ diệu giúp 
                  điều trị hiệu quả một số vấn đề về sức khỏe, bao gồm cải thiện hệ tiêu hóa, 
                  sức khỏe tim mạch, kiểm soát cân nặng và lượng đường trong máu.
                </p>
                <p className={styles.blogParagraph}>
                  Do giá trị dinh dưỡng cao và bị thơm béo nên ngày càng có nhiều người tiêu dùng
                  Việt Nam lựa chọn loại hạt này. Sau đây là top 3 lý do vì sao nhiều người tiêu dùng
                  tin tưởng lựa chọn hạt mắc ca sấy của Rio Macca (Rio Farm).
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={'/coso2.jpeg'} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/coso3.jpeg'} alt={'sample2'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>1. Nguồn gốc rõ ràng from farm to table</h2>
                <p className={styles.blogParagraph}>
                  Khác với các mặt hàng mắc ca trôi nổi trên thị trường với nguồn gốc xuất xứ
                  chưa được kiểm chứng, Rio Macca được trồng và chế biến ngay tại quê hương
                  Lâm Hà, Lâm Đồng, Việt Nam. Sau đây là hình ảnh thu hoạch hạt macca
                  ngay tại vườn của Rio Macca. 
                </p>
                <br/>

                <div className={styles.imageContainer}>
                  <img src={'/riomacca.jpeg'} alt={'sample2'} />
                </div>
                <p className={styles.blogParagraph}>
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
                </p>
                <p className={styles.blogParagraph}>
                  Ngoài ra hạt mắc ca sấy của Rio Macca còn được cơ quan chức năng
                  cấp phép hoạt động và chứng nhận đạt đủ các chỉ tiêu chất lượng.
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>2. Giá cả phản ánh đúng chất lượng</h2>
                <p className={styles.blogParagraph}>
                  Do hạt mắc ca của Rio Macca được trồng tại vườn hoặc thu mua từ những
                  hộ dân trong địa phận Lâm Hà, chất lượng đầu vào của Rio Macca rất cao
                  so với những cơ sở sản xuất khác. Thêm vào đó Rio Macca còn cung cấp 
                  thêm dòng sản phẩm hạt macca nguyên vỏ phục vụ đúng nhu cầu thiết yếu
                  của người tiêu dùng sành sỏi.
                </p>
                <p className={styles.blogParagraph}>
                  Nếu đã từng thưởng thức hạt macca cao cấp đã tách sẵn vỏ cùng với 
                  hạt macca nguyên vỏ đảm bảo 100% người tiêu dùng đều nhận ra rằng 
                  hạt macca còn nguyên vỏ tạo cảm giác hương vị đúng hơn. Bởi bất cứ 
                  loại hạt hay món ăn nào thưởng thức mới nhất thì đảm bảo hương vị tốt nhất 
                  và hạt macca cũng thế. Tách vỏ hạt và cắn hạt macca nhai trong miệng 
                  đảm bảo rằng bạn sẽ cảm nhận được hương vị béo, giòn, ngọt và 
                  bùi bùi tan chảy ngay trên đầu lưỡi. Còn đối với những loại hạt macca 
                  tách vỏ sẵn nó sẽ bị vơi đi một phần ngon và hấp dẫn, tươi mới của nó.
                </p>
                <p className={styles.blogParagraph}>
                Tất cả các hạt macca của Rio Macca đều được tuyển chọn kỹ càng và phải đạt kích thước 
                cho mỗi hạt từ 25mm trở lên. Mỗi hạt Macca đều được áp dụng theo quy trình tách hạt 
                đặc biệt, nguồn lực vừa đủ. Đảm bảo rằng khi đến tay người tiêu dùng chỉ gần gỡ 
                nhẹ là có thể ăn mà không cần phải mất nhiều thời gian công sức cho khâu tách hạt.
                </p>
                <p className={styles.blogParagraph}>
                Quý khách có thể an tâm tuyệt đối về chất lượng của từng hạt. Không hề xảy ra bất cứ
                tình trạng hạt lép hay hỏng mốc so với nhiều sản phẩm trôi nổi không rõ nguồn gốc 
                trên thị trường.
                </p>
                <p className={styles.blogParagraph}>
                Quy cách đóng gói đặc biệt, đảm bảo cung cấp được các sản phẩm hạt Macca ngon, chất lượng. 
                </p>
                <br/>
                <h2 className={styles.blogSubHeader}>3. Ship toàn quốc</h2>
                <p className={styles.blogParagraph}>
                  Rio Macca hỗ trợ khách hàng ship toàn quốc. Cho dù bạn ở tỉnh thành
                  nào, Rio Macca cũng sẵn sàng ship tận cửa. Không chỉ mang đến 
                  chất lượng sản phẩm cao cấp mà Rio Macca còn chú trọng khâu thiết kế 
                  tỉ mỉ, sang trọng. Vì vậy quý khách hoàn toàn có thể chọn mua 
                  macca sấy của Rio Macca để làm quà tặng cho người thân, bạn bè 
                  thay cho lời chúc về sức khỏe. Đảm bảo rằng món quà sẽ gắn kết 
                  tình thân và sự chân thành mà mọi người dành cho nhau.
                </p>
                

              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
