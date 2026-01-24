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
              title={'Câu chuyện sản phẩm'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Sản phẩm: Macca Rio - Hạt macca sấy khô<br />
                  Chủ thể: Hộ kinh doanh Rio Macca<br />
                  Địa chỉ: Thôn Đoàn Kết, xã Đan Phượng, huyện Lâm Hà, tỉnh Lâm Đồng

                </p>
              </div>

              <div className={styles.content}>
                <p className={styles.blogParagraph}>
                  Được sản xuất, chế biến bởi Hộ kinh doanh Ri Ô Mắc ca tại thôn Đoàn Kết, xã Đan Phượng,
                  sản phẩm mắc ca sấy Rio gây ấn tượng bởi nền bao bì màu vàng cam đặc trưng nổi bật được lấy cảm hứng từ nắng, gió của vùng đất cao nguyên.
                  Rio Mắc ca là thành quả của quá trình khởi nghiệp nhiều gian nan, thử thách, bền bỉ để phát triển của cô gái Nguyễn Thị Ánh - một thanh niên thế hệ 9X sinh ra và lớn
                  lên trên quê hương Lâm Hà.
                </p>
                <p className={styles.blogParagraph}>
                  Xuất thân trong một gia đình nông dân, Nguyễn Thị Ánh sớm thấu hiểu được nỗi cực nhọc, thiệt thòi của người nông dân khi nông sản làm ra không có nơi tiêu thụ.
                  Bằng sự nhạy bén và bản lĩnh của mình, Nguyễn Thị Ánh đã quyết tâm theo đuổi hành trình tìm phương thức chế biến ra những hạt mắc ca sấy khô đạt tiêu chuẩn chất lượng,
                  dù ở thời điểm đó việc tiêu thụ mắc ca đang rơi vào giai đoạn khó khăn nhất.
                </p>
                <br />
                <div className={styles.imageContainer}>
                  <img style={{ objectFit: 'contain' }} src={'/blogs/macca-story01.jpg'} alt={'Chủ hộ kinh doanh Nguyễn Thị Ánh'} />
                </div>
                <p className={styles.blogParagraph}>
                  Đến nay, cơ sở Rio Mắc ca đã xây dựng nhà xưởng sản xuất riêng, đầu tư đồng bộ các máy móc hiện đại phục vụ chế biến, sản xuất đảm bảo tiêu chuẩn chất lượng trong mỗi mắt xích.
                  Quả mắc ca sau khi được thu hái sẽ được chà vỏ ngay trong ngày và tiến hành phân size, trải qua quy trình sấy chuẩn để giữ lại được tối đa chất dinh dưỡng và hương vị thơm ngon.
                  Hạt thành phẩm sẽ được đóng gói theo nhu cầu của khách hàng. Bên cạnh đó, cơ sở Rio Mắc ca đặc biệt quan tâm đến việc duy trì ổn định về sản lượng và chất lượng tại các vườn
                  nguyên liệu mắc ca với các nông hộ trên địa bàn. Những vườn mắc ca nguyên liệu cung cấp cho cơ sở Ri Ô mắc ca đều là những vườn đã đạt 10 năm tuổi,
                  cho năng suất, chất lượng tốt nhất. Nếu như Hộ Kinh doanh mắc ca RIO  thực hiện các cam kết về giá trị thu mua và chất lượng sản phẩm sau chế biến,
                  thì các nông hộ tuân thủ quy trình, kỹ thuật về chăm sóc và thu hoạch.
                </p>
                <div className={styles.imagesContainer}>
                  <div className={styles.imageContainer}>
                    <img src={'/blogs/macca-story02.jpg'} alt={'sample1'} />
                  </div>
                  <div className={styles.imageContainer}>
                    <img src={'/blogs/macca-story03.jpg'} alt={'sample1'} />
                  </div>
                  <div className={styles.imageContainer}>
                    <img src={'/blogs/macca-story04.jpg'} alt={'sample1'} />
                  </div>
                  <div className={styles.imageContainer}>
                    <img src={'/blogs/macca-story05.jpg'} alt={'sample1'} />
                  </div>
                </div>
                <p className={styles.blogParagraph}>
                  Hiện nay, trung bình mỗi năm, Ri Ô mắc ca chế biến thành phẩm và tiêu thụ đạt sản lượng trên 10 tấn mắc ca. Cơ sở đạt các điều kiện như giấy chứng nhận đăng ký kinh doanh,
                  chứng nhận cơ sở đủ điều kiện an toàn thực phẩm, đồng thời đã tiến hành tự công bố sản phẩm theo quy định. Toàn bộ sản phẩm mắc ca sấy nứt được phân loại theo size lớn và
                  size trung, đóng gói hút chân không hoặc đựng trong lon PET với khối lượng tịnh loại 250g và loại 500g. Bên cạnh các thông tin về nơi sản xuất, số điện thoại liên hệ, website
                  được in trên bao bì, khách hàng còn có thể trích xuất mã QR để kiểm tra, xác minh thêm về thông tin sản phẩm. Với những cam kết về uy tín, chất lượng, hộ kinh doanh Ri Ô Mắc ca
                  đã thiết lập và xây dựng cho mình kênh tiêu thụ sản phẩm ổn định trên nền tảng của facebook, zalo với hàng nghìn lượt theo dõi, tương tác. Với mỗi đơn hàng được gửi đi,
                  Ri Ô Mắc ca vẫn luôn cầu thị, tiếp thu các ý kiến đánh giá của khách hàng để không ngừng hoàn thiện về mẫu mã và nâng cao chất lượng sản phẩm.
                </p>
                <div className={styles.imagesContainer}>
                  <div className={styles.imageContainer}>
                    <img style={{ objectFit: 'contain' }} src={'/blogs/macca-story06.jpg'} alt={'sample1'} />
                  </div>
                  <div className={styles.imageContainer}>
                    <img style={{ objectFit: 'contain' }} src={'/blogs/macca-story07.jpg'} alt={'sample1'} />
                  </div>
                  <div className={styles.imageContainer}>
                    <img style={{ objectFit: 'contain' }} src={'/blogs/macca-story08.jpg'} alt={'sample1'} />
                  </div>
                </div>
                <p className={styles.blogParagraph}>
                  Bên cạnh dòng sản phẩm hạt mắc ca sấy khô được người tiêu dùng yêu thích, cơ sở Ri Ô Mắc ca đang tiếp tục ấp ủ với dự định chế biến thêm các sản phẩm dinh dưỡng
                  từ mắc ca như dầu ăn, bánh quy,… phục vụ cho người tiêu dùng là trẻ em, người già, những người thực hiện chế độ ăn kiêng.
                </p>
                <p className={styles.blogParagraph}>
                  Đã qua chặng đường đầu tiên gian khó, Ri Ô Mắc ca giờ đây không chỉ đang viết tiếp hành trình khởi nghiệp với những dự định mới, khát vọng vươn xa hơn của cô gái Nguyễn Thị Ánh,
                  mà còn là “sứ giả” kết nối giữa những người nông dân ở nơi là vùng kinh tế mới của Hà Nội tại Lâm Đồng với các vùng, miền, tỉnh, thành trên mọi miền Tổ quốc.
                  Uy tín, sự đón nhận của người tiêu dùng dành cho sản phẩm Ri Ô mắc ca đã góp phần tạo nên giá trị thương hiệu của hạt mắc ca Lâm Hà, là minh chứng cho tiềm năng,
                  thế mạnh riêng có của mảnh đất vốn được thiên nhiên ưu đãi về thổ nhưỡng và khí hậu dành cho loại cây trồng được mệnh danh là “nữ hoàng quả khô”.
                </p>
                <br />
                <center className={styles.videoContainer}>
                  <iframe
                    title='Rio Macca'
                    width='100%'
                    height='500'
                    src='https://www.youtube.com/embed/BUKddHPS3pk?rel=0'
                    frameBorder='0'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </center>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
