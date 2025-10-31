import { useState } from "react";
import "./About.css"
import AnimatedSection from "../../components/animated-section";
import Experience from "../../components/ui/Experience"
import Certificate from "../../components/ui/Certificate"

export default function About() {

  const [activeTab, setActiveTab] = useState("experience");

  return (
    <main className="about-page">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h1>Giới thiệu</h1>
          <p className="subtitle">Backend</p>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Who I Am Card */}
          <AnimatedSection delay={0.2} className="about-card">
            <h2 className="card-title">Tôi là ai?</h2>
            <p className="card-text">
              Mình là một Backend Developer đầy đam mê, hiện đang là năm cuối tại Đại học Công nghệ TP.HCM, Khoa Công nghệ lập trình. Mình chuyên về phát triển backend với NodeJS và frontend hiện đại với React.
            </p>
            <p className="card-text">
              Hành trình với công nghệ của mình bắt đầu từ sự tò mò về cách mọi thứ hoạt động, và dần phát triển thành một sự nghiệp gắn bó với việc giải quyết các vấn đề phức tạp và tạo ra các giải pháp tinh tế.
            </p>
            <p className="card-text">
              Khi không lập trình, bạn có thể tìm thấy mình đang tìm hiểu về các thiết bị điện tử mới, hoặc khám phá các công nghệ mới.
            </p>
          </AnimatedSection>

          {/* Quick Facts Card */}
          <AnimatedSection delay={0.3} className="about-card">
            <h2 className="card-title">Thông tin nhanh</h2>
            <div className="quick-facts">
              <div className="fact-item">
                <span className="fact-label">Trường</span>
                <span className="fact-value">Đại học Công nghệ TP.HCM</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Kinh nghiệm</span>
                <span className="fact-value">Thực tập sinh</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Chuyên môn</span>
                <span className="fact-value">Backend Development</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Email</span>
                <span className="fact-value">duckhai84.it@gmail.com</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} className="d-flex justify-content-center pt-4">
          <h1 style={{ fontWeight: '600' }}>Chứng nhận</h1>
        </AnimatedSection>

        <div className="my-3 d-flex justify-content-left">
          <button
            onClick={() =>
              setActiveTab(activeTab === "experience" ? "certificate" : "experience")
            }
            style={{ borderRadius: '8px', border: '1px solid rgb(214, 163, 248)', backgroundColor: 'rgb(244, 232, 252) ' }}
            className=" ps-3 pe-1 py-2  font-medium"
          >
            {activeTab === "experience" ? "Hình ảnh" : "Thông tin"}
            <i class="fa-solid fa-arrow-right mx-2"></i>
          </button>
        </div>

        <div>
          {activeTab === "experience" && <Experience />}
          {activeTab === "certificate" && <Certificate />}
        </div>

      </div>
    </main>
  )
}