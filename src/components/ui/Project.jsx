import React from "react";
import { Card } from "react-bootstrap";
import AnimatedSection from "../animated-section";



export default function ExperienceSection() {

    const additionalTechSkillCoder = [
        "NodeJS",
        "Express",
        "Typescript",
        "PostgreSQL",
        "REST APIs",
        "ReacJS + Vite",
        "Firebase Authentication",
        "Postman",
    ];
     const additionalTechOmniMer = [
        "NodeJS",
        "Express",
        "Typescript",
        "MongoDB",
        "Flutter",
        "Firebase",
        "APIs",
        "Docker",
        "CI/CD Pinelines",
        "SSL", 
        "Domain",
        "Deploy"
    ];

     const additionalTechAccommnodation = [
        "C#",
        ".NET",
        "MySQL",
        "REST APIs",
        "MVC Pattern",
        "Postman",
    ];

     const additionalTechCourses = [
        "NodeJS",
        "Express",
        "PostgreSQL",
        "ReactJS + Vite",
        "REST APIs",
        "Postman",
    ];


    return (
        <div className="d-flex flex-column gap-4">

            <AnimatedSection delay={0.3}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">SkillCoder - E-learning Programming</h5>
                                <p style={{ fontWeight: '600' }} className="d-flex justify-content-left text-primary mb-0 mt-2">Chill Team</p>
                            </div>
                            <small className="text-muted">Present</small>
                        </div>

                        <div className="mt-3 d-flex justify-content-left">
                            {additionalTechSkillCoder.map((tech, i) => (
                                <span
                                    key={i}
                                    className="project-items-addition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </Card.Body>
                </Card>
            </AnimatedSection>

            {/* Notebook Expert */}
            <AnimatedSection delay={0.4}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">OmnimerEDU - School Management Ecosystem</h5>
                                <p style={{ fontWeight: '600' }} className="d-flex justify-content-left text-primary mb-0">OmniMer Team</p>
                            </div>
                            <small className="text-muted">July 2025 - Present</small>
                        </div>

                        <div className="mt-3 d-flex justify-content-left">
                            {additionalTechOmniMer.map((tech, i) => (
                                <span
                                    key={i}
                                    className="project-items-addition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </Card.Body>
                </Card>
            </AnimatedSection>

            
            <AnimatedSection delay={0.5}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">Dashboard Management Courses</h5>
                                <p style={{ fontWeight: '600' }} className="d-flex justify-content-left text-primary mb-0">Two members</p>
                            </div>
                            <small className="text-muted">Present</small>
                        </div>

                        <div className="mt-3 d-flex justify-content-left">
                            {additionalTechCourses.map((tech, i) => (
                                <span
                                    key={i}
                                    className="project-items-addition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </Card.Body>
                </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
                <Card className="border-0 shadow-sm p-3 border-start border-4 border-primary bg-light">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <div>
                                <h5 className="fw-bold mb-1">Accommodation Management</h5>
                                <p style={{ fontWeight: '600' }} className="d-flex justify-content-left text-primary mb-0 mt-2">Chill Team</p>
                            </div>
                            <small className="text-muted">2024</small>
                        </div>

                        <div className="mt-3 d-flex justify-content-left">
                            {additionalTechAccommnodation.map((tech, i) => (
                                <span
                                    key={i}
                                    className="project-items-addition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </Card.Body>
                </Card>
            </AnimatedSection>

        </div>
    );
};
