import aboutImg from "../../assets/images/about-img.webp";
import signature from "../../assets/images/kp-signature.svg";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about-sec" className="about-section">
      <div className="site-container about-row">

        <div className="flex-1">
          <img src={aboutImg} className="about-img" alt="about-image" />
        </div>

        <div className="flex-1">
          <div className="site-common-content">
            <h2 className="site-title-h2">About Me</h2>

            <p className="body-text">
              I’m a passionate web developer with a strong eye for design and detail.
              My work focuses on creating seamless digital experiences through efficient
              code and thoughtful user interfaces. Over the past few years, I’ve
              collaborated with startups and agencies to build websites that are not only
              beautiful but also optimized for performance and scalability.
            </p>

            <p className="body-text">
              When I’m not coding, you’ll find me experimenting with UI animations,
              learning new frameworks, or exploring web accessibility improvements.
            </p>

            <img src={signature} className="my-signature" alt="my-signature" />
          </div>
        </div>

      </div>
    </section>
  );
}
