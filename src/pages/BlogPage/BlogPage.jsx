import { Link } from "react-router-dom";
import "./Blog.css"
import AnimatedSection from "../../components/animated-section";
import reactjs from "../../assets/images/reactjs.png"
import nodejs from "../../assets/images/nodejs.webp"
import typescript from "../../assets/images/typescript.webp"
import cicd from "../../assets/images/cicd.png"
import socket from "../../assets/images/socket.png"
import java from "../../assets/images/java.webp"
import docker from "../../assets/images/docker.png"
import typescriptJavascript from "../../assets/images/typescriptjavascript.jpg"
import HookReact  from "../../assets/images/reacthool.webp"



export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Xây dựng API với Node.js và Express",
      excerpt:
        "Tìm hiểu cách tạo các API có thể xử lý nhiều người dùng cùng lúc bằng Node.js và Express. Bài viết hướng dẫn bạn về routing, middleware và xử lý lỗi một cách dễ hiểu.",
      date: "15 Tháng 10, 2024",
      category: "NodeJS",
      image: nodejs,
      author: "Đức Khải", 
      readTime: "8 phút đọc",
    },
    {
      id: 2,
      title: "Làm chủ TypeScript trong phát triển web hiện đại",
      excerpt:
        "Hiểu rõ TypeScript như một chuyên gia! Bài viết giải thích về kiểu dữ liệu, interface và generics giúp mã của bạn an toàn và dễ bảo trì hơn.",
      date: "10 Tháng 10, 2024",
      category: "TypeScript",
      image: typescript,
      author: "Đức Khải" ,
      readTime: "12 phút đọc",
    },
    {
      id: 3,
      title: "Sự tiện dụng của React với Components",
      excerpt:
        "Học các cách đơn giản để tách các đoạn mã được sử dụng nhiều lần thành các components để tái sử dụng lại.",
      date: "5 Tháng 10, 2024",
      category: "ReactJS",
      image: reactjs,
      author: "Đức Khải" ,
      readTime: "15 phút đọc",
    },
    {
      id: 4,
      title: "Thiết lập CI/CD với GitHub Actions và Docker",
      excerpt:
        "Hướng dẫn từng bước để tự động build, kiểm thử và triển khai dự án của bạn bằng GitHub Actions và Docker.",
      date: "28 Tháng 9, 2024",
      category: "CI/CD Pipelines",
      image: cicd,
      author: "Đức Khải ",
      readTime: "10 phút đọc",
    },
    {
      id: 5,
      title: "Giao tiếp thời gian thực với lập trình Socket",
      excerpt:
        "Tìm hiểu cách thêm tính năng chat và thông báo thời gian thực vào ứng dụng của bạn bằng Socket.io, kèm theo ví dụ đơn giản.",
      date: "20 Tháng 9, 2024",
      category: "Socket",
      image: socket,
      author: "Đức Khải",
      readTime: "14 phút đọc",
    },
    {
      id: 6,
      title: "Lập trình hướng đối tượng trong Java ",
      excerpt:
        "Hiểu rõ các khái niệm cốt lõi như lớp, đối tượng, kế thừa và đa hình trong Java. Bài viết giúp bạn áp dụng OOP hiệu quả để viết mã dễ bảo trì và mở rộng.",
      date: "15 Tháng 9, 2024",
      category: "Java",
      image: java,
      author: "Đức Khải",
      readTime: "11 phút đọc",
    },
    {
      id: 7,
      title: "Hook cơ bản trong ReactJS",
      excerpt:
        "Tìm hiểu hai hook cơ bản nhất trong ReactJS: useState và useEffect. Bài viết này sẽ giúp bạn hiểu rõ cách hoạt động và cách sử dụng hiệu quả chúng.",
      date: "18 Tháng 10, 2024",
      category: "ReactJS",
      image: HookReact,
      author: "Đức Khải",
      readTime: "9 phút đọc",
    },
    {
      id: 8,
      title: "Hiểu hơn về Docker Containers",
      excerpt:
        "Docker giúp bạn chạy ứng dụng ở bất kỳ đâu mà không cần cài đặt thêm phần mềm phức tạp. Bài viết sẽ giúp bạn nắm vững những khái niệm cốt lõi một cách dễ hiểu.",
      date: "12 Tháng 10, 2024",
      category: "DevOps",
      image: docker,
      author: "Đức Khải",
      readTime: "10 phút đọc",
    },
    {
      id: 9,
      title: "So sánh giữa Javascript và Typescript",
      excerpt:
        "Javascript và Typescript đều là ngôn ngữ mạnh mẽ trong lập trình web. Bài viết này sẽ giúp bạn hiểu sự khác biệt và khi nào nên chọn mỗi loại.",
      date: "8 Tháng 10, 2024",
      category: "JavaScript",
      image: typescriptJavascript,
      author: "Đức Khải",
      readTime: "7 phút đọc",
    },
  ];


  return (
    <main className="blog-page">
      <div className="blog-container">
        {/* Header */}
        <AnimatedSection delay={0.2} className="blog-header">
          <h1>Bài viết cá nhân</h1>
          <p className="subtitle">Những bài viết về lập trình, công nghệ và trải nghiệm học tập</p>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="d-flex">
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-4 mb-5" key={index}>
                <AnimatedSection delay={0.3}>
                  <div className="blog-card">

                    <div className="blog-image-container">
                      <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="card-img-top blog-image" />
                    </div>

                    {/* Content */}
                    <div className="d-flex flex-column">

                      <div className="d-flex justify-content-between align-items-center my-3">
                        <div bg="primary" className="blog-badge">
                          {blog.category}
                        </div>
                        <span className="text-muted small">{blog.readTime}</span>
                      </div>

                      <div className="card-title fw-bold mb-2 blog-title">{blog.title}</div>

                      <p className="card-text">{blog.excerpt}</p>

                      <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                        <span className="text-muted small">{blog.date}</span>

                        <Link
                          to={`/blog/${blog.id}`}
                          className="blog-button"
                        >
                          Đọc thêm →
                        </Link>

                      </div>

                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}
