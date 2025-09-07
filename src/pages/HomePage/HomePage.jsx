import ChibiPicture from "../../assets/images/chibiPicture.png";
import styles from "./HomePage.module.css";
export default function HomePage() {
    return (
        <div className="row py-4 mt-4">
            <div className="col-6">
                <div className="my-3">
                    <span style={{ fontSize: '30px', fontWeight: '700' }} className={`mt-3 d-flex justify-content-left`}>Hello, It's Me</span>
                    <span style={{ fontSize: '45px', fontWeight: '800' }} className={`d-block d-flex justify-content-left`}>Duc Khai</span>
                    <span style={{ fontSize: '30px', fontWeight: '700' }} className={`d-block pb-1 d-flex justify-content-left align-items-center`}>And I'm a <span style={{ marginLeft: '7px', fontWeight: '800', fontSize:'32px' }} className={`${styles.titleBE}`}>Backend Developer</span></span>
                </div>

                <div className="my-3">
                    <p style={{ fontSize: '18px' }} className={` d-flex justify-content-left ${styles.subtitle}`}>Backend Developer với niềm đam mê xây dựng và tối ưu hóa hệ thống server-side, tập trung vào hiệu suất, bảo mật và khả năng mở rộng. Luôn sẵn sàng học hỏi công nghệ mới để mang lại những giải pháp bền vững và đáng tin cậy cho người dùng.</p>
                    <p style={{ fontStyle: 'italic', fontWeight: '400' }} className={`my-3 d-flex justify-content-left ${styles.subtitle}`}>Backend Developer là người biến ý tưởng thành hệ thống vận hành thực tế.</p>
                </div>


                <div className="my-3 ">
                    <ul className={`d-flex my-3 ${styles.social_lists}`}>
                        <a href="" style={{ color: '#333' }} className={`${styles.social_items}`}>
                            <i style={{ fontSize: '24px' }} className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="" style={{ color: '#333' }} className={`mx-4 ${styles.social_items}`}>
                            <i style={{ fontSize: '24px' }} className="fa-brands fa-instagram"></i>
                        </a>

                        <a href="" style={{ color: '#333' }} className={`${styles.social_items}`}>
                            <i style={{ fontSize: '24px' }} className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </ul>
                </div>

                <div className="my-4 py-2 d-flex justify-content-left ">
                    <a href="/assets/CV/CV.pdf" download className={`d-inline-block text-align-left ${styles.button_downloadCV}`}>Download CV</a>
                </div>
            </div>
            <div className={`col-6 d-flex align-items-center justify-content-center`}>
                <img src={ChibiPicture} alt="ReactJS Logo" className={`${styles.logo}`} />
            </div>
        </div>
    )
}