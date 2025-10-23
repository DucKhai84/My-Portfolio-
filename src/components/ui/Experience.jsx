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
                                Worked with team members to implement and enhance features on an e-commerce website built with WordPress.
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
                                Applying data structures and algorithms to efficiently solve programming challenges.
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
                                Gained practical knowledge of IP usage mechanisms and socket programming for network applications.
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
                                Strengthened core JavaScript skills and advanced proficiency in essential concepts.
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
                                Enhanced understanding of loops and advanced JavaScript techniques for practical coding.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </AnimatedSection>
        </div>
    );
};
