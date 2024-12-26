import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Numbers from './sections/Numbers/Numbers';
import About from './sections/About/About';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Numbers />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
