import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import "./Project.css"
import Project from "../../components/ui/Project"
import AnimatedSection from "../../components/animated-section";


export default function Projects() {

  return (
    <main className="projects-page">
      <Container className="py-5">
        {/* Header */}

  

        <AnimatedSection delay={0.2}  className="projects-header">
          <h1>Dự án tiêu biểu</h1>
          <p className="subtitle">Giới thiệu các dự án cá nhân và sản phẩm gần đây</p>
        </AnimatedSection>

        <Project/>

      </Container>
    </main>
  )
}
