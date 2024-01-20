import './Skills.css';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/javascript.png';
import python from './images/python.png';
import postgres from './images/postgre.png';
import git from './images/github.png';
import jasmine from './images/jasmine.png';
import mocha from './images/mocha.png';
import nodejs from './images/nodejs.png';
import uxDesign from './images/ux-design.png';

function Skills() {
  return (
    <section id="skills" className="Skills">
      <h2>Skills</h2>

      <h3>Programming Languages</h3>
      <div>
        <figure>
          <img src={html} alt="An HTML 5 icon" />
          <figcaption>HTML5</figcaption>
        </figure>
        <figure>
          <img src={css} alt="A CSS 3 icon " />
          <figcaption>CSS3</figcaption>
        </figure>
        <figure>
          <img src={js} alt="A Javascript icon " />
          <figcaption>Javascript</figcaption>
        </figure>
        <figure>
          <img src={python} alt="Python icon" />
          <figcaption>Python 3</figcaption>
        </figure>
      </div>

      <h3>Web Technologies & Database Management</h3>
      <div>
        <figure>
          <img src={nodejs} alt="NodeJS icon" />
          <figcaption>NodeJs</figcaption>
        </figure>
        <figure>
          <img src={jasmine} alt="Jasmine icon" />
          <figcaption>Jasmine</figcaption>
        </figure>
        <figure>
          <img src={mocha} alt="Mocha icon" />
          <figcaption>Mocha</figcaption>
        </figure>
        <figure>
          <img src={postgres} alt="Postgres icon" />
          <figcaption>Postgres</figcaption>
        </figure>
      </div>

      <h3>Version Control and Development Tools</h3>
      <div>
        <figure>
          <img src={git} alt="A Github icon" />
          <figcaption>Git and Github</figcaption>
        </figure>
      </div>

      <h3>Other Interests</h3>
      <div>
        <div>
          <figure>
            <img src={uxDesign} alt="UX Design icon" />
            <figcaption>UX Design</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Skills;
