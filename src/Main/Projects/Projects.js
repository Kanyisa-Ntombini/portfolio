import './Projects.css';
import botPrototype from './images/bot-prototype.png';
import coffeeBook from './images/coffee-book.jpg';
import usingPhone from './images/using-phone.jpg';

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      <p>
        The following projects were inspired by{' '}
        <a href="https://www.codecademy.com/learn">Codecademy's</a> "Flexbox
        Business Site" project. I created a webpage, phone app and chatbot for
        an imaginary book and coffee shop called The Cosy Corner.
      </p>

      <div className="All-Projects">
        <div className="Project-Container">
          <h3>Webpage</h3>
          <figure>
            <img
              src={coffeeBook}
              alt="An open book on a table and a black tea cup and saucer being held"
            />
            <figcaption>Caption</figcaption>
          </figure>

          <p>
            This{' '}
            <a href="https://kanyisa-ntombini.github.io/cosy-corner/">
              webpage
            </a>{' '}
            contains information about the business. It has been created with
            Flexbox and CSS Grid. Please feel free to view the{' '}
            <a href="https://github.com/Kanyisa-Ntombini/cosy-corner">
              {' '}
              repository
            </a>{' '}
            for more details.
          </p>
        </div>

        <div className="Project-Container">
          <h3>App Prototype</h3>
          <figure>
            <img src={botPrototype} alt="Screenshot of the app prototype" />
            <figcaption>Caption</figcaption>
          </figure>
          <p>
            This is a{' '}
            <a href="https://www.figma.com/proto/j1s8Y1T8wHMG0MCSZYiqhQ/Cozy-Corner-App?node-id=2%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3">
              prototype
            </a>{' '}
            for the app customers will use to order books and hot drinks online
            to be delivered to their doorstep. It has been created with Figma.
          </p>
        </div>

        <div className="Project-Container">
          <h3>Chatbot</h3>
          <figure>
            <img src={usingPhone} alt="A man typing on a smart phone" />
            <figcaption>Caption</figcaption>{' '}
          </figure>
          <p>
            The app is powered by a chatbot created with Python. Please feel
            free to view the{' '}
            <a href="https://github.com/Kanyisa-Ntombini/coffee-maker-bot">
              repository
            </a>{' '}
            for more information.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
