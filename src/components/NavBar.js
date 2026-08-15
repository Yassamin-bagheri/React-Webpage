import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Shapely Demo</div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#blog">BLOG</a>
          <a href="#portfolio">PORTFOLIO</a>

          <a href="#about">
            ABOUT THE TEST
            <span>⌄</span>
          </a>

          <a href="#level">LEVELS</a>
          <a href="#shop">SHOP</a>

          <button className="search-btn">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            🔍
          </button>
        </div>

        <button className="menu-btn">☰</button>
      </div>
    </nav>
  );
}

export default Navbar;
