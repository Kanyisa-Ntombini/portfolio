import './Projects.css';
import botPrototype from './images/bot-prototype.png';
import coffeeBook from './images/coffee-book.jpg';
import bookClub from './images/book-club.jpg';

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      <p>
        The following projects were inspired by{' '}
        <a href="https://www.codecademy.com/learn">Codecademy's</a> "Flexbox
        Business Site" project. An imaginary coffee and booksop called The Cosy
        Corner has commissioned a few products for it's online presence. This
        consists of a web page for the coffee shop, a server for keeping data of
        customers that have joined the book club and a chatbot for the mobile
        app.
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
          <h3>Server for the book club</h3>
          <figure>
            <img src={bookClub} alt="Screenshot of the app prototype" />
            <figcaption>Caption</figcaption>
          </figure>
          <p>
            This is a server that is run locally that stores data of customers
            that have joined the book club
          </p>
        </div>

        <div className="Project-Container">
          <h3>Chatbot</h3>
          <figure>
            <img src={botPrototype} alt="A man typing on a smart phone" />
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
