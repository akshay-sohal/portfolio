import Header from '../components/Header/Header';
import Hero from '../components/Hero/HeroSection';
import About from '../components/About/AboutSection';
import Skills from '../components/Skills/SkillSection';
import Journey from '../components/Journey/JourneySection';
import ExperienceSection from "../components/Experience/ExperienceSection";
import ProjectsSection from "../components/Projects/ProjectsSection";
import Testimonial from "../components/Testimonial/TestimonialSection";
import Footer from "../components/Footer/Footer";


function Homepage() {
  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Skills/>
     <Journey/>
     <ExperienceSection/>
     <ProjectsSection/>
     <Testimonial/>
     <Footer/>
    </>
  )
}

export default Homepage
