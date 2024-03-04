import './Header.css';

function Header() {
  const navItemNames = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const navItems = navItemNames.map((itemName, index) => {
    return (
      <li key={index}>
        <a href={`#${itemName.toLowerCase()}`}>{itemName}</a>
      </li>
    );
  });

  const openNav = () => {
    document.getElementById('sideNavWidth').style.width = '100%';
    document.getElementById('hamburgerIcon').style.display = 'none';
  };

  const closeNav = () => {
    document.getElementById('sideNavWidth').style.width = 0;
    document.getElementById('hamburgerIcon').style.display = 'block';
  };

  return (
    <header className="Header">
      <div className="Mobile">
        <h1>
          <a href="#index">Kanyisa Ntombini</a>
        </h1>
        <nav className="Side-Nav" id="sideNavWidth">
          <div className="Hamburger-Icon" id="hamburgerIcon" onClick={openNav}>
            &#9776;
          </div>
          <div className="Cross-Icon" onClick={closeNav}>
            &times;
          </div>
          {navItems}
        </nav>
      </div>

      <div className="Desktop">
        <h1>
          <a href="#index">Kanyisa Ntombini</a>
        </h1>
        <nav>{navItems}</nav>
      </div>
    </header>
  );
}

export default Header;
