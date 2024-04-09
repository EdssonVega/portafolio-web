import logo from './logo.svg';
import './App.css';
import NavbarSection from './components/navbar/Navbar';
import HeroSection from './components/Hero/Hero';
import AboutMeSection from './components/AboutMe/AboutMe';
import ProjectSection from './components/Projects/Projects';
import ContactMeSection from './components/ContactMe/ContactMe';
import Logotipo from './components/logotipo/logotipo';


function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
      <ContactMeSection />
    </div>
  );
}

export default App;
