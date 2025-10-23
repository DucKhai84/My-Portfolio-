import React from "react";
import AnimatedSection from "../../components/animated-section";
import './Skill.css'

export default function SkillsSection() {
  const skills = {
    DEV: [
      "NodeJS",
      "Express",
      "Java",
      "Spring Boot",
      "ReactJS",
      ".NET",
      "Typescript",
      "C++/C",
    ],
    DevOps: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Model Fine-Tuning",
      "Feature Engineering",
      "Pretrained Models",
    ],

    DATA: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Jupyter",
      "SQL",
      "Docker",
      "Firebase Authentication",
      "Cloudinary",
    ],
    OPS: [
      "CI/CD Pipelines",
      "SSL Integration",
      "Model Deployment",
      "Domain Integration",
      "Docker",
      "API Integration",
      "Git/GitHub",
    ],
  };

  const additionalTech = [
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Postman",
  ];

  return (
    <main className="skill-page">
      <div className="skill-container">

        <AnimatedSection delay={0.2} className="skill-header">
          <h1>Kỹ năng chuyên môn</h1>
          <p className="subtitle">Backend - DevOps Developer</p>
        </AnimatedSection>

        <div className="">
          <div className="row">

            <div className="col-6">
              <AnimatedSection direction="up" delay={0.3}>
                <div className="p-6 rounded-lg shadow-lg hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">

                  <div className="d-flex justify-content-center py-4 ">
                    <span style={{ backgroundColor: 'rgba(250, 208, 208, 1)', border: '1px solid rgba(243, 95, 95, 1)', borderRadius: '50%' }} className="d-flex align-items-center px-2 me-2">
                      <span style={{ fontSize: '12px', fontWeight: '600' }} className="d-flex align-item-center">
                        DEV
                      </span>
                    </span>
                    <h3 style={{ margin: '0', fontWeight: '600' }} className="d-flex align-item-center">
                      Ngôn ngữ lập trình / Framework
                    </h3>
                  </div>

                  <ul style={{ listStyle: 'none', padding: '0 32px' }} className="d-flex pb-4">
                    <div className="row">
                      {skills.DEV.map((skill, i) => (
                        <div className="col-6">
                          <li
                            key={i}
                            className="skill-items"
                          >
                            {skill}
                          </li>
                        </div>
                      ))}
                    </div>
                  </ul>

                </div>
              </AnimatedSection>
            </div>

            <div className="col-6">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="p-6 rounded-lg shadow-lg hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">

                  <div className="d-flex justify-content-center py-4 ">
                    <span style={{ backgroundColor: 'rgb(250, 249, 191)', border: '1px solid rgb(211, 208, 11)', borderRadius: '50%' }} className="d-flex align-items-center px-2 me-2">
                      <span style={{ fontSize: '12px', fontWeight: '600' }} className="d-flex align-item-center">
                        Data
                      </span>
                    </span>
                    <h3 style={{ margin: '0', fontWeight: '600' }} className="d-flex align-item-center">
                      Cơ sở dữ liệu
                    </h3>
                  </div>

                  <ul style={{ listStyle: 'none', padding: '0 32px' }} className="d-flex pb-4">
                    <div className="row">
                      {skills.DATA.map((skill, i) => (
                        <div className="col-6">
                          <li
                            key={i}
                            className="skill-items"
                          >
                            {skill}
                          </li>
                        </div>
                      ))}
                    </div>
                  </ul>
                </div>
              </AnimatedSection>
            </div>


          </div>
        </div>

        {/* Hàng 2: DATA & OPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">


          {/* OPS */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">

              <div className="d-flex justify-content-center py-4 ">
                <span style={{ backgroundColor: 'rgba(218, 255, 219, 1)', border: '1px solid rgba(118, 252, 123, 1)', borderRadius: '50%' }} className="d-flex align-items-center px-2 me-2">
                  <span style={{ fontSize: '12px', fontWeight: '600' }} className="d-flex align-item-center">
                    OPS
                  </span>
                </span>
                <h3 style={{ margin: '0', fontWeight: '600' }} className="d-flex align-item-center">
                  Vận hành hệ thống
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: '0 32px' }} className="d-flex pb-4">
                <div className="row">
                  {skills.OPS.map((skill, i) => (
                    <div className="col-6">
                      <li
                        key={i}
                        className="skill-items"
                      >
                        {skill}
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Technologies */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 text-center">

            <div className="d-flex justify-content-center py-4 ">
              <h3 style={{ margin: '0', fontWeight: '600' }} className="d-flex align-item-center">
                Các công nghệ bổ sung
              </h3>
            </div>

            <div className="mt-3">
              {additionalTech.map((tech, i) => (
                <span
                  key={i}
                  className="skill-items-addition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
