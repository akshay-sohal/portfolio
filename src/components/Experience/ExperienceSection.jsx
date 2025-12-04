import expImg1 from "../../assets/images/exp-img-01.webp";
import expImg2 from "../../assets/images/exp-img-02.webp";

import "./ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section className="experience-section">
      <div className="site-container">
        
        <h2 className="site-title-h2 section-title">Experience</h2>

        <div className="experience-row">
          <div className="flex-1">
            <img src={expImg1} alt="experience-img-1" />
          </div>

          <div className="flex-1">
            <div className="exp-content">
              <div className="site-common-content">
                <h3 className="site-title-h3">Frontend Developer Intern</h3>
                <div className="work-exp">
                  <p>TechNova Solutions</p>
                  <p className="bold">2022–2023</p>
                </div>
              </div>

              <ul className="list body-text">
                <li>Designed and developed UI components using React.</li>
                <li>Improved site speed by 35% through code optimization.</li>
                <li>
                  Collaborated with designers to translate Figma files into
                  responsive web pages.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-row">
          <div className="flex-1">
            <img src={expImg2} alt="experience-img-2" />
          </div>

          <div className="flex-1">
            <div className="exp-content">
              <div className="work-exp">
                <h3 className="site-title-h3">Freelance Web Developer</h3>
                <p className="bold">2023–Present</p>
              </div>

              <ul className="list body-text">
                <li>
                  Delivered responsive websites for small businesses and personal
                  brands.
                </li>
                <li>Integrated SEO practices and analytics tools.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
