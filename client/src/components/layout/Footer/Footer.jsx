import { Facebook, Youtube } from 'react-bootstrap-icons';
import styles from './footer.module.scss';
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <ul>
                        <li>Tích điểm Quà tặng VIP</li>
                        <li>Lịch sử mua hàng</li>
                        <li>Cộng tác bán hàng</li>
                        <li>Tìm hiểu về mua trả góp</li>
                        <li>Chính sách bảo hành</li>
                    </ul>
                    <ul>
                        <li>Giới thiệu công ty</li>
                        <li>Tuyển dụng</li>
                        <li>Gửi góp ý, khiếu nại</li>
                        <li>Tìm siêu thị (3.203 shop)</li>
                        <li>Xem bản mobile</li>
                    </ul>
                    <ul>
                        <li>Tổng đài hỗ trợ (Miễn phí gọi)</li>
                        <li>Gọi mua: 1800.1060 (7:30 - 22:00)</li>
                        <li>Kỹ thuật: 1800.1763 (7:30 - 22:00)</li>
                        <li>Khiếu nại: 1800.1062 (8:00 - 21:30)</li>
                        <li>Bảo hành: 1800.1064 (8:00 - 21:00)</li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>
                    © 2018. TechZone
                </p>
            </div>
        </footer>
    );
}

export default Footer;
