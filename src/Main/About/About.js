import './About.css';
import professionalPic from './professional-pic.jpg';

function About() {
  return (
    <section id="about" className="About">
      <figure>
        <img
          src={professionalPic}
          alt="Black woman in a black shirt"
          className="professional-pic"
        />
      </figure>

      <div>
        <h2>Hello there!</h2>
        <p>
          I am an aspiring Full Stack Web Developer. My interests are in
          Javascript and Python. I am currently learning Front End development
          using HTML, CSS and JavaScript. I am also interested in building
          chatbots and Machine Learning. You can find more information about me
          in my
          <a href="./kanyisa_resume.pdf" target="_blank">
            resume
          </a>
          .
        </p>
        <p>
          I am partially sighted due to a condition called Keratoconus. As a
          result, I am a disability activist. I want to build accessible
          websites so everyone can use them despite their physical or mental
          condition.
        </p>
        <p>
          When not coding, I like taking nature walks, looking for the cosiest
          coffee shops in town or spending time with my friends and family. I am
          also an avid knitter!
        </p>
      </div>
    </section>
  );
}

export default About;
