import './Contact.css';
import github from './images/github.png';
import linkedIn from './images/linkedin.webp';
// import gmail from './images/gmail.png';

function Contact() {
  return (
    <section id="contact" className="Contact">
      <h2>Contact Me</h2>
      <p>
        Please send me an email at{' '}
        <span>
          <a href="mailto:kanyisa.ntombini@gmail.com">
            kanyisa.ntombini@gmail.com.
          </a>
        </span>
      </p>

      <div className="Social-Media">
        <figure>
          <a href="https://github.com/Kanyisa-Ntombini">
            <img
              className="social-media-icons"
              src={github}
              alt="github icon"
            />
          </a>
        </figure>

        <figure>
          <a href="https://www.linkedin.com/in/kanyisa-ntombini/">
            <img
              className="social-media-icons"
              src={linkedIn}
              alt="linkedin icon"
            />
          </a>
        </figure>
      </div>
    </section>
  );
}

export default Contact;
