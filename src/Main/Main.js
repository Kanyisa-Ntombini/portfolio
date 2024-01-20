import './Main.css';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact.js';

function Main() {
  return (
    <main className="Main">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
