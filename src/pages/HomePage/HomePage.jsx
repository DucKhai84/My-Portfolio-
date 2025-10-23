import { Link } from "react-router-dom";
import ChibiPicture from "../../assets/images/chibiPicture.png";
import AnimatedSection from "../../components/animated-section"
import styles from "./HomePage.module.css";
export default function HomePage() {
    return (
        <div className={`${styles.home_pages}`}>
            <div className={`${styles.home_container}`}>
                <div className="row py-4 mt-4 h-100">
                    <div className="col-6 pe-5">
                        
                        <AnimatedSection delay={0.2} className="my-3">
                            {/* <span style={{ fontSize: '30px', fontWeight: '700' }} className={`mt-3 d-flex justify-content-left`}>Hello, It's Me</span> */}
                            <span style={{ fontSize: '45px', fontWeight: '800' }} className={`d-block d-flex justify-content-left ${styles.titleName}`}>Duc Khai</span>
                            <span style={{ fontSize: '30px', fontWeight: '700' }} className={`d-block pb-1 d-flex justify-content-left align-items-center`}>Tôi là <span style={{ marginLeft: '7px', fontWeight: '800', fontSize: '32px' }} className={`${styles.titleBE}`}>Backend Developer</span></span>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3} className="my-3">
                            <p style={{ fontSize: '18px' }} className={` d-flex justify-content-left ${styles.subtitle}`}>Backend Developer với niềm đam mê xây dựng và tối ưu hóa các hệ thống phía server, tập trung vào hiệu năng, bảo mật và khả năng mở rộng. Luôn hứng thú học hỏi các công nghệ mới để mang đến các giải pháp bền vững và đáng tin cậy cho người dùng.</p>
                            <p style={{ fontStyle: 'italic', fontWeight: '400' }} className={`my-3 d-flex justify-content-left ${styles.subtitle}`}>Biến ý tưởng thành hệ thống — ổn định, an toàn và có khả năng mở rộng.</p>
                            {/* <p style={{ fontStyle: 'italic', fontWeight: '400' }} className={`my-3 d-flex justify-content-left ${styles.subtitle}`}>Backend Developer là người biến ý tưởng thành hệ thống vận hành thực tế.</p> */}
                        </AnimatedSection>


                        <AnimatedSection delay={0.4} className="my-4 py-2 d-flex justify-content-left ">
                            <Link className={`d-inline-block text-align-left ${styles.button_viewProject}`} to="/about">
                            <i class="fa-solid fa-eye me-2"></i>
                            Khám phá</Link>
                            <a href="/assets/CV/CV.pdf" download className={`d-inline-block text-align-left ${styles.button_downloadCV}`}>
                            <i class="fa-solid fa-download me-2"></i>
                            Resume</a>

                        </AnimatedSection>


                        <AnimatedSection delay={0.5} className="my-3 ">
                            <ul className={`d-flex my-3 ${styles.social_lists}`}>
                                <a href="" style={{ color: '#333' }} className={`${styles.social_items} ${styles.social_items_fb}`}>
                                    <i style={{ fontSize: '24px' }} className="fa-brands fa-facebook-f"></i>
                                </a>

                                <a href="" style={{ color: '#333' }} className={`${styles.social_items} ${styles.social_items_ig}`}>
                                    <i style={{ fontSize: '24px' }} className="fa-brands fa-instagram"></i>
                                </a>

                                <a href="" style={{ color: '#333' }} className={`${styles.social_items} ${styles.social_items_linke}`}>
                                    <i style={{ fontSize: '24px' }} className="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a href="" style={{ color: '#333' }} className={`${styles.social_items} ${styles.social_items_mail}`}>
                                    <i style={{ fontSize: '24px' }} className="fa-solid fa-envelope"></i>
                                </a>
                            </ul>
                        </AnimatedSection>


                    </div>
                    <AnimatedSection delay={0.6} className={`col-6 d-flex align-items-center justify-content-center`}>
                        <img src={ChibiPicture} alt="ReactJS Logo" className={`${styles.logo}`} />
                    </AnimatedSection>
                </div>
            </div>

        </div>

    )
}