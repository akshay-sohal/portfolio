import "./HeroSection.css"
import heroImg from "../../assets/images/hero-img.webp"; 

export default function HeroSection () {
  return (
    <section className="hero-section">
      <div className="site-container hero-row">
        
        <img src={heroImg} className="hero-img" alt="hero-image" />

        <div className="hero-content site-common-content">
          
          <div className="hero-heading">
            <p className="subtitle-text">Hi, I’m Karan Patel</p>
            <h1 className="site-title-h1">Web Developer</h1>
          </div>

          <div className="hero-body-text">
            <p className="body-text">
              who loves turning ideas into clean, functional, and high-performing digital experiences.
            </p>
            <p className="body-text">
              I build responsive, fast, and user-friendly websites using modern web technologies.
            </p>
          </div>
          
          <div className="btn-group">
            <a href="#" className="site-btn">See work</a>
            <a href="#" className="outline-btn">Lets Talk</a>
          </div>

        </div>
      </div>
    </section>
  );
};

