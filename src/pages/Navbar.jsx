function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#">
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                CV
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                My Projects
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
