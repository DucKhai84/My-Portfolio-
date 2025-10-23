import { Clock, User, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import styles from "../css/post.module.css"

import reactjs from "../../assets/images/reactjs.png"
import nodejs from "../../assets/images/nodejs.webp"
import typescript from "../../assets/images/typescript.webp"
import cicd from "../../assets/images/cicd.png"
import socket from "../../assets/images/socket.png"
import java from "../../assets/images/java.webp"
import docker from "../../assets/images/docker.png"
import typescriptJavascript from "../../assets/images/typescriptjavascript.jpg"
import HookReact from "../../assets/images/reacthool.webp"

import id1 from "../../assets/codeSnipet/id1.png"
import id2 from "../../assets/codeSnipet/id2.png"
import id3 from "../../assets/codeSnipet/id3.png"
import id4 from "../../assets/codeSnipet/id4.png"
import id5 from "../../assets/codeSnipet/id5.png"
import id6 from "../../assets/codeSnipet/id6.png"
import id7 from "../../assets/codeSnipet/id7.png"
import id8 from "../../assets/codeSnipet/id8.png"
import id9 from "../../assets/codeSnipet/id9.png"

export default function Post() {
  const { id } = useParams()

  const blogs = [
    {
      id: 1,
      title: "Xây dựng API với Node.js và Express",
      slogan: "Từ ý tưởng đến API — chỉ trong vài dòng code với Express.",
      recommend: "Lời khuyên khi sử dụng Node.js và Express",
      recommendText:
        "Hãy tổ chức mã nguồn theo module rõ ràng và sử dụng middleware hợp lý để dễ bảo trì. Đừng quên xử lý lỗi tập trung và bảo mật API bằng JWT hoặc OAuth.",
      question: "Tại sao nên chọn Node.js và Express?",
      content:
        "NodeJs là môi trường runtime cho JavaScript trên server, cho phép bạn dùng JavaScript để xây dựng backend.Express là một framework nhẹ, linh hoạt, giúp quản lý routing, middleware và xử lý request / response một cách dễ dàng.Cộng đồng lớn, nhiều module hỗ trợ, dễ dàng mở rộng và tích hợp với các cơ sở dữ liệu như MongoDB, PostgreSQL hay MySQL.",
      excerpt:
        "Trong thời đại phát triển ứng dụng web hiện nay, việc xây dựng một API (Application Programming Interface) là rất quan trọng để kết nối giữa frontend và backend, cũng như phục vụ các ứng dụng di động. Node.js cùng Express là một bộ đôi phổ biến giúp bạn tạo ra các API hiệu quả và dễ dàng mở rộng. Trong bài viết này, chúng ta sẽ tìm hiểu cách xây dựng một API cơ bản sử dụng Node.js và Express.",
      date: "15 Tháng 10, 2024",
      category: "NodeJS",
      image: nodejs,
      readTime: "8 phút đọc",
      author: "Đức Khải",
      tags: ["Node.js", "Express", "REST API", "Backend"],
      codeSnippet: id1
    },
    {
      id: 2,
      title: "Làm chủ TypeScript trong phát triển web hiện đại",
      slogan: "TypeScript — mã an toàn, bảo trì dễ dàng.",
      recommend: "Lời khuyên khi học TypeScript",
      recommendText:
        "Bắt đầu với các kiểu dữ liệu cơ bản trước khi tìm hiểu generics hay decorators. Hãy dùng TypeScript trong dự án thực tế để hiểu giá trị thật của nó.",
      question: "Tại sao nên sử dụng TypeScript trong dự án web?",
      content:
        "TypeScript giúp bạn viết mã JavaScript có kiểu dữ liệu rõ ràng, phát hiện lỗi ngay khi compile, và dễ bảo trì hơn cho các dự án lớn. Nó cũng hỗ trợ các tính năng hiện đại như interface, generics và decorators, giúp mã nguồn mạnh mẽ và dễ mở rộng.",
      excerpt:
        "Hiểu rõ TypeScript như một chuyên gia! Bài viết giải thích về kiểu dữ liệu, interface và generics giúp mã của bạn an toàn và dễ bảo trì hơn.",
      date: "10 Tháng 10, 2024",
      category: "TypeScript",
      image: typescript,
      readTime: "12 phút đọc",
      author: "Đức Khải",
      tags: ["TypeScript", "JavaScript", "Web Development", "Best Practices"],
      codeSnippet: id2,
    },
    {
      id: 3,
      title: "Sự tiện dụng của React với Components",
      slogan: "Tái sử dụng code, tối ưu UI với Components.",
      recommend: "Lời khuyên khi sử dụng React Components",
      recommendText:
        "Giữ component nhỏ, tách biệt và dễ tái sử dụng. Đặt tên rõ ràng và sử dụng props hợp lý để code dễ hiểu và dễ mở rộng.",
      question: "Tại sao nên sử dụng Components trong React?",
      content:
        "Components giúp tách các phần UI thành các đoạn mã có thể tái sử dụng, giảm trùng lặp code và dễ dàng quản lý. Chúng cũng giúp React cập nhật DOM hiệu quả nhờ cơ chế virtual DOM.",
      excerpt:
        "Học các cách đơn giản để tách các đoạn mã được sử dụng nhiều lần thành các components để tái sử dụng lại.",
      date: "5 Tháng 10, 2024",
      category: "ReactJS",
      image: reactjs,
      readTime: "15 phút đọc",
      author: "Đức Khải",
      tags: ["React", "Components", "UI", "Frontend"],
      codeSnippet: id3,
    },
    {
      id: 4,
      title: "Thiết lập CI/CD với GitHub Actions và Docker",
      slogan: "Tự động hóa quy trình, triển khai nhanh chóng.",
      recommend: "Lời khuyên khi thiết lập CI/CD",
      recommendText:
        "Hãy bắt đầu với pipeline đơn giản trước, sau đó mở rộng dần. Luôn kiểm thử và lint code trước khi build để đảm bảo chất lượng.",
      question: "Tại sao nên thiết lập CI/CD cho dự án?",
      content:
        "CI/CD giúp tự động build, kiểm thử và triển khai dự án, giảm thiểu lỗi do thao tác thủ công. Nó cũng giúp nhóm phát triển làm việc hiệu quả hơn, tăng tốc độ ra mắt sản phẩm.",
      excerpt:
        "Hướng dẫn từng bước để tự động build, kiểm thử và triển khai dự án của bạn bằng GitHub Actions và Docker.",
      date: "28 Tháng 9, 2024",
      category: "CI/CD Pipelines",
      image: cicd,
      readTime: "10 phút đọc",
      author: "Đức Khải",
      tags: ["CI/CD", "DevOps", "GitHub Actions", "Docker"],
      codeSnippet: id4,
    },
    {
      id: 5,
      title: "Giao tiếp thời gian thực với lập trình Socket",
      slogan: "Thời gian thực, kết nối mọi lúc mọi nơi.",
      recommend: "Lời khuyên khi sử dụng Socket.io",
      recommendText:
        "Hãy giới hạn sự kiện cần thiết và quản lý kết nối cẩn thận để tránh quá tải. Sử dụng namespace hoặc room để tối ưu truyền dữ liệu.",
      question: "Tại sao nên sử dụng Socket.io cho real-time?",
      content:
        "Socket.io cho phép ứng dụng giao tiếp thời gian thực giữa client và server, hữu ích cho chat, thông báo hoặc game trực tuyến. Nó dễ tích hợp với Node.js và quản lý kết nối hiệu quả.",
      excerpt:
        "Tìm hiểu cách thêm tính năng chat và thông báo thời gian thực vào ứng dụng của bạn bằng Socket.io, kèm theo ví dụ đơn giản.",
      date: "20 Tháng 9, 2024",
      category: "Socket",
      image: socket,
      readTime: "14 phút đọc",
      author: "Đức Khải",
      tags: ["Socket.io", "Realtime", "WebSocket", "Node.js"],
      codeSnippet: id5,
    },
    {
      id: 6,
      title: "Lập trình hướng đối tượng trong Java",
      slogan: "OOP — nền tảng lập trình hiệu quả.",
      recommend: "Lời khuyên khi học OOP trong Java",
      recommendText:
        "Tập trung hiểu rõ 4 nguyên lý chính: đóng gói, kế thừa, đa hình và trừu tượng. Thực hành bằng các ví dụ thực tế thay vì chỉ lý thuyết.",
      question: "Tại sao nên học OOP trong Java?",
      content:
        "OOP giúp tổ chức mã nguồn tốt, dễ bảo trì và mở rộng. Các nguyên lý cơ bản như lớp, đối tượng, kế thừa, đa hình và trừu tượng giúp xây dựng phần mềm chuyên nghiệp và dễ quản lý.",
      excerpt:
        "Hiểu rõ các khái niệm cốt lõi như lớp, đối tượng, kế thừa và đa hình trong Java. Bài viết giúp bạn áp dụng OOP hiệu quả để viết mã dễ bảo trì và mở rộng.",
      date: "15 Tháng 9, 2024",
      category: "Java",
      image: java,
      readTime: "11 phút đọc",
      author: "Đức Khải",
      tags: ["Java", "OOP", "Kế thừa", "Đa hình"],
      codeSnippet: id6,
    },
    {
      id: 7,
      title: "Hook cơ bản trong ReactJS",
      slogan: "Hooks — tối ưu hóa state và lifecycle.",
      recommend: "Lời khuyên khi sử dụng Hooks",
      recommendText:
        "Hãy hiểu rõ cách hook hoạt động trước khi kết hợp chúng. Đừng gọi hook trong vòng lặp hoặc điều kiện — điều này dễ gây lỗi.",
      question: "Tại sao nên sử dụng Hooks trong React?",
      content:
        "Hooks giúp quản lý state và lifecycle của component mà không cần class. Chúng làm code gọn hơn, dễ tái sử dụng và theo dõi các side-effect hiệu quả.",
      excerpt:
        "Tìm hiểu hai hook cơ bản nhất trong ReactJS: useState và useEffect. Bài viết này sẽ giúp bạn hiểu rõ cách hoạt động và cách sử dụng hiệu quả chúng.",
      date: "18 Tháng 10, 2024",
      category: "ReactJS",
      image: HookReact,
      readTime: "9 phút đọc",
      author: "Đức Khải",
      tags: ["React", "Hooks", "useState", "useEffect"],
      codeSnipet: id7,
    },
    {
      id: 8,
      title: "Hiểu hơn về Docker Containers",
      slogan: "Docker — triển khai nhanh, mọi nơi.",
      recommend: "Lời khuyên khi sử dụng Docker",
      recommendText:
        "Giữ image gọn nhẹ bằng cách dùng base image nhỏ và xóa cache sau khi build. Luôn đặt tên version cho image để dễ quản lý.",
      question: "Tại sao nên sử dụng Docker?",
      content:
        "Docker giúp chạy ứng dụng đồng nhất trên mọi môi trường, giảm rủi ro lỗi do khác biệt cấu hình. Nó cũng giúp triển khai nhanh và dễ quản lý các container.",
      excerpt:
        "Docker giúp bạn chạy ứng dụng ở bất kỳ đâu mà không cần cài đặt thêm phần mềm phức tạp. Bài viết sẽ giúp bạn nắm vững những khái niệm cốt lõi một cách dễ hiểu.",
      date: "12 Tháng 10, 2024",
      category: "DevOps",
      image: docker,
      readTime: "10 phút đọc",
      author: "Đức Khải",
      tags: ["Docker", "Containers", "DevOps", "Deployment"],
      codeSnipet: id8,
    },
    {
      id: 9,
      title: "So sánh giữa JavaScript và TypeScript",
      slogan: "Chọn ngôn ngữ phù hợp cho dự án.",
      recommend: "Lời khuyên khi chọn ngôn ngữ",
      recommendText:
        "Nếu bạn cần tốc độ phát triển nhanh, chọn JavaScript. Nếu bạn làm dự án lớn và muốn kiểm soát lỗi chặt chẽ, hãy chọn TypeScript.",
      question: "Khi nào nên chọn JavaScript hoặc TypeScript?",
      content:
        "JavaScript thích hợp cho các dự án nhỏ, nhanh, không yêu cầu kiểm soát lỗi chặt. TypeScript phù hợp dự án lớn, muốn tăng tính ổn định và phát hiện lỗi sớm nhờ typing mạnh mẽ.",
      excerpt:
        "JavaScript và TypeScript đều là ngôn ngữ mạnh mẽ trong lập trình web. Bài viết này sẽ giúp bạn hiểu sự khác biệt và khi nào nên chọn mỗi loại.",
      date: "8 Tháng 10, 2024",
      category: "JavaScript",
      image: typescriptJavascript,
      readTime: "7 phút đọc",
      author: "Đức Khải",
      tags: ["JavaScript", "TypeScript", "Frontend", "Ngôn ngữ lập trình"],
      codeSnipet: id9,
    },
  ];





  const post = blogs.find((b) => b.id === Number(id))

  return (
    <article className={styles.article}>
      <div className={styles.headerNav}>
        <div className={styles.navContainer}>
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft className={styles.metadataIcon} />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img src={post.image || "/placeholder.svg"} alt={post.title} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.categoryBadge}>{post.category}</div>

        <h1 className={styles.title}>{post.title}</h1>


        <h4 className={styles.slogan}>{post.slogan}</h4>

        <div className={styles.metadata}>
          {post.author && (
            <div className={styles.metadataItem}>
              <User className={styles.metadataIcon} />
              <span>{post.author}</span>
            </div>
          )}

          {post.readTime && (
            <div className={styles.metadataItem}>
              <Clock className={styles.metadataIcon} />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>

        <div className={styles.articleBody}>
          <p className={styles.articleBodyText}>{post.excerpt}</p>
        </div>


        <div style={{ marginBottom: '16px' }} className={styles.articleBody}>
          <h3 style={{ fontWeight: '600' }} className={styles.articleBodyText}>{post.question}</h3>
        </div>

        <div style={{ marginTop: "0" }} className={styles.articleBody}>
          <ul className={styles.articleBodyText}>
            {post.content
              .split(/(?<=\.)/) // tách mỗi câu theo dấu chấm (và giữ lại dấu chấm)
              .map((sentence, index) => (
                <li key={index}>{sentence.trim()}</li>
              ))}
          </ul>
        </div>
        <div style={{ marginTop: "0" }} className={styles.articleBody}>
          <img className={styles.codeSnipet} src={post.codeSnippet} alt="Code Snipet" />
        </div>

        {/* lời khuyên */}
        <div style={{ marginBottom: '16px' }} className={styles.articleBody}>
          <h3 style={{ fontWeight: '600' }} className={styles.articleBodyText}>{post.recommend}</h3>
        </div>

        <div style={{ marginTop: "0" }} className={styles.articleBody}>
          <p className={styles.articleBodyText}>{post.recommendText}</p>
        </div>


        {post.tags && post.tags.length > 0 && (
          <div className={styles.tagsSection}>
            <p className={styles.tagsLabel}>Tags</p>
            <div className={styles.tagsList}>
              {post.tags.map((tag) => (
                <a key={tag} href={`/blog?tag=${tag}`} className={styles.tagItem}>
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
