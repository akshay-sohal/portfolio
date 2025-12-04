import skill01 from "../../assets/images/skill-01.webp";
import skill02 from "../../assets/images/skill-02.webp";
import skill03 from "../../assets/images/skill-03.webp";
import skill04 from "../../assets/images/skill-04.webp";
import "./SkillSection.css"; 

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skill-sec">
      <div className="site-container">
        <h2 className="site-title-h2 section-title">Technical Skills</h2>

        <div className="skills-row">

          <div className="site-col-4">
            <div className="site-common-content">
              <img src={skill01} alt="frontend-skill" />
              <h2 className="site-title-h2">Frontend</h2>
            </div>
          </div>

          <div className="site-col-4">
            <div className="site-common-content">
              <img src={skill02} alt="backend-skill" />
              <h2 className="site-title-h2">Backend</h2>
            </div>
          </div>

          <div className="site-col-4">
            <div className="site-common-content">
              <img src={skill03} alt="database-skill" />
              <h2 className="site-title-h2">Database</h2>
            </div>
          </div>

          <div className="site-col-4">
            <div className="site-common-content">
              <img src={skill04} alt="tools-skill" />
              <h2 className="site-title-h2">Tools & Others</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
