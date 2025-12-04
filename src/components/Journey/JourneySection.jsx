import verticalLine from "../../assets/images/vertical-line.svg";
import "./JourneySection.css"; 

export default function JourneySection() {
  return (
    <section className="journey-section" id="journey-sec">
      <div className="site-container">
        
        <p className="site-title-h1 section-title">My Journey</p>
        <h2 className="site-title-h2">Education</h2>

        <div className="journey-row">

          <div className="flex-1">
            <div className="site-common-content">
              <h3 className="site-title-h3">Bachelor of Computer Applications (BCA)</h3>
              <div className="pass-year">
                <p>Christ University, Bengaluru</p>
                <p>— 2019–2022</p>
              </div>
            </div>

            <div className="site-common-content">
              <h3 className="site-title-h3">Bachelor of Computer Applications (BCA)</h3>
              <div className="pass-year">
                <p>Christ University, Bengaluru</p>
                <p>— 2019–2022</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="site-common-content">
              <h3 className="site-title-h3">Certificate in Full Stack Web Development</h3>
              <div className="pass-year">
                <p>Christ University, Bengaluru</p>
                <p>— 2019–2022</p>
              </div>
            </div>

            <div className="site-common-content">
              <h3 className="site-title-h3">Certificate in Full Stack Web Development</h3>
              <div className="pass-year">
                <p>Christ University, Bengaluru</p>
                <p>— 2019–2022</p>
              </div>
            </div>
          </div>

          <img src={verticalLine} className="vertical-line" alt="vertical-line" />

        </div>
      </div>
    </section>
  );
}
