import projectImg1 from "../../assets/images/project-01.webp";
import projectImg2 from "../../assets/images/project-02.webp";

import "./ProjectsSection.css"; 

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="project-sec">
      <div className="site-container">
        
        <h2 className="site-title-h2 section-title">Projects</h2>

        <div className="projects-row">
          <div className="flex-1">
            <img src={projectImg1} alt="project-01" />
          </div>

          <div className="flex-1">
            <div className="site-common-content">
              <h3 className="site-title-h3">Startup Connect Platform</h3>
              <p className="site-title-h3">
                A web app connecting investors with early-stage startups. Built using 
                React and Firebase with live data filtering and dashboard UI.
              </p>
            </div>
          </div>
        </div>

        <div className="projects-row">
          <div className="flex-1">
            <img src={projectImg2} alt="project-02" />
          </div>

          <div className="flex-1">
            <div className="site-common-content">
              <h3 className="site-title-h3">EcoMart E-commerce Website</h3>
              <p className="site-title-h3">
                Full-stack project using Node.js and MongoDB. Features include cart 
                management, authentication, and admin dashboard.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
