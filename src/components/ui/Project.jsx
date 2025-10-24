import React from "react";
import { Card } from "react-bootstrap";
import AnimatedSection from "../animated-section";
import styles from "../../components/css/project.module.css";

export default function ExperienceSection() {

  const projects = [
    {
      title: "SkillCoder - E-learning Programming",
      team: "Chill Team",
      time: "Present",
      technologies: [
        "NodeJS", "Express", "Typescript", "PostgreSQL", "REST APIs",
        "ReactJS + Vite", "Firebase Authentication", "Postman"
      ],
      tasks: [
        "Thiết kế và xây dựng hệ thống học lập trình trực tuyến có thể chạy code trực tiếp.",
        "Tìm hiểu và phát triển tính năng xác thực người dùng bằng Firebase Authentication.",
        "Xây dựng API RESTful để quản lý bài học, test case và tiến độ học viên.",
        "Thiết lập cơ chế đánh giá bài học tự động bằng Judge0 API.",
        "Cùng các thành viên xây dựng lên cơ sở dữ liệu."
      ]
    },
    {
      title: "OmnimerEDU - School Management Ecosystem",
      team: "OmniMer Team",
      time: "July 2025 - Present",
      technologies: [
        "NodeJS", "Express", "Typescript", "MongoDB", "Flutter",
        "Firebase", "APIs", "Docker", "CI/CD Pipelines", "SSL", "Domain", "Deploy"
      ],
      tasks: [
        "Thiết kế giao diện cho SuperAdmin và viết API lấy thông số của VPS.",
        "Thiết kế và xây dựng các tính năng cần thiết cho ứng dụng.",
        "Phát triển hệ sinh thái quản lý trường học bao gồm giáo viên, học sinh, điểm danh và lớp học.",
        "Viết các API để ứng dụng được viết bằng fultter có thể sử dụng.",
        "Thiết lập CI/CD Pipeline và triển khai hệ thống lên server bằng Docker.",
        "Cấu hình SSL, domain, và giám sát hệ thống trong quá trình vận hành."
      ]
    },
    {
      title: "Dashboard Management Courses",
      team: "Two members",
      time: "Present",
      technologies: [
        "NodeJS", "Express", "PostgreSQL", "ReactJS + Vite", "REST APIs", "Postman"
      ],
      tasks: [
        "Xây dựng trang quản trị cho giảng viên quản lý khóa học và học viên.",
        "Thiết kế dashboard hiển thị biểu đồ và thống kê tiến độ học tập.",
        "Tối ưu hiệu năng giao tiếp giữa backend và frontend thông qua API.",
        "Áp dụng kiến trúc MVC trong backend."
      ]
    },
    {
      title: "Accommodation Management",
      team: "Chill Team",
      time: "2024",
      technologies: [
        "C#", ".NET", "MySQL", "REST APIs", "MVC Pattern", "Postman"
      ],
      tasks: [
        "Xây dựng hệ thống quản lý hợp đồng thuê phòng cho ký túc xá.",
        "Tự động hóa quy trình tạo chi tiết thuê phòng sau khi người dùng ký hợp đồng.",
        "Phát triển API để quản lý người thuê, hợp đồng và phòng.",
        "Áp dụng mô hình MVC trong quá trình phát triển backend."
      ]
    }
  ];

  return (
    <div className="d-flex flex-column gap-4">
      {projects.map((project, index) => (
        <AnimatedSection key={index} delay={0.3 + index * 0.1}>
          <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
            <Card.Body>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
                <div>
                  <h5 className="fw-bold mb-1">{project.title}</h5>
                  <p style={{ fontWeight: '600' }} className="d-flex justify-content-left text-primary mb-0">
                    {project.team}
                  </p>
                </div>
                <small className="text-muted">{project.time}</small>
              </div>

              
              <div className={styles.taskWrapper}>
                <span className={styles.task}>Nhiệm vụ:</span>
              </div>

              <div style={{ marginTop: "0" }} className={styles.taskBody}>
                <ul className={styles.taskBodyText}>
                  {project.tasks.map((task, i) => (
                    <li className={styles.taskBodyTextItems} key={i}>{task}</li>
                  ))}
                </ul>
              </div>

              
              <div className="mt-4 d-flex flex-wrap justify-content-left">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-items-addition">
                    {tech}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
