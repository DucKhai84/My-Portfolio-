
import { Card, Row, Col } from "react-bootstrap";
import CertificateJavaE2 from "../../assets/images/javascript-essentials-2.png";
import CertificateJavaE1 from "../../assets/images/javascript-essentials-1.png";
import CertificateFisrtWebsite from "../../assets/images/chungnhan_107025.png";
import CertificateNetworking from "../../assets/images/networking-basics.png";
import AnimatedSection from "../animated-section";
import styles from "../css/Certificate.module.css";

export default function CertificateSection() {

  const certificates = [
    {
      title: "My Fisrt Website",
      org: "Hutech",
      date: "October 2023",
      img: CertificateFisrtWebsite,
    },
    {
      title: "Networking Basic",
      org: "Hutech",
      date: "September 2025",
      img: CertificateNetworking,
    },
    {
      title: "JavaScript Basic",
      org: "Hutech",
      date: "September 2025",
      img: CertificateJavaE1,
    },
    {
      title: "JavaScript Intermediate",
      org: "Hutech",
      date: "September 2025",
      img: CertificateJavaE2,
    },
  ];

  return (
    <div className="container">
      <Row className="g-4">
        {certificates.map((cert, index) => (
          <Col key={index} md={6}>
            <AnimatedSection delay={0.2 + index * 0.1}>
              <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light h-100">
                <Card.Body>
                  {cert.img && (
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className={`${styles.logo} mb-3`}
                    />
                  )}
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                    <div>
                      <h5 className="fw-bold mb-1">{cert.title}</h5>
                       <p className="text-primary mb-0">{cert.org}</p>
                    </div>
                    <small className="text-muted">{cert.date}</small>
                  </div>
                </Card.Body>
              </Card>
            </AnimatedSection>
          </Col>
        ))}
      </Row>
    </div>
  );
}
