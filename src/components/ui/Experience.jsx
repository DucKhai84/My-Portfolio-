import React from "react";
import { Card } from "react-bootstrap";
import AnimatedSection from "../animated-section";

export default function ExperienceSection() {
    return (
        <div className="d-flex flex-column gap-4">

            <AnimatedSection delay={0.2}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">My First Website</h5>
                                <p className="d-flex justify-content-left text-primary mb-0">Hutech</p>
                            </div>
                            <small className="text-muted">April 2024</small>
                        </div>
                        <ul className="mb-0 ps-3">
                            <li>
                                Làm việc cùng các thành viên trong nhóm để triển khai và cải thiện các tính năng trên một trang web thương mại điện tử được xây dựng bằng WordPress.
                            </li>
                        </ul>

                    </Card.Body>
                </Card>
            </AnimatedSection>

            {/* Notebook Expert */}
            <AnimatedSection delay={0.3}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">IT Competition</h5>
                                <p className="d-flex justify-content-left text-primary mb-0">Hutech</p>
                            </div>
                            <small className="text-muted">October 2023</small>
                        </div>
                        <ul className="mb-0 ps-3">
                            <li>
                                Áp dụng các cấu trúc dữ liệu và thuật toán để giải quyết hiệu quả các bài toán lập trình.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </AnimatedSection>

            {/* Co-Head Automation */}
            <AnimatedSection delay={0.4}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">Networking Basic</h5>
                                <p className="d-flex justify-content-left text-primary mb-0">Cisco</p>
                            </div>
                            <small className="text-muted">September 2025</small>
                        </div>
                        <ul className="mb-0 ps-3">
                            <li>
                                Đã tích lũy kiến thức thực tiễn về cơ chế sử dụng địa chỉ IP và lập trình socket cho các ứng dụng mạng.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </AnimatedSection>

            {/* Coordinator */}
            <AnimatedSection delay={0.5}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">JavaScript Essential Basic</h5>
                                <p className="d-flex justify-content-left text-primary mb-0">
                                    Cisco
                                </p>
                            </div>
                            <small className="text-muted">September 2025</small>
                        </div>
                        <ul className="mb-0 ps-3">
                            <li>
                                Củng cố các kỹ năng JavaScript cốt lõi và nâng cao trình độ thành thạo các khái niệm quan trọng.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </AnimatedSection>

            {/* Coordinator */}
            <AnimatedSection delay={0.6}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">JavaScript Essential Intermediate</h5>
                                <p className="d-flex justify-content-left text-primary mb-0">
                                    Cisco
                                </p>
                            </div>
                            <small className="text-muted">September 2025</small>
                        </div>
                        <ul className="mb-0 ps-3">
                            <li>
                                Nâng cao hiểu biết về vòng lặp và các kỹ thuật JavaScript nâng cao trong lập trình thực tế.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </AnimatedSection>
        </div>
    );
};
