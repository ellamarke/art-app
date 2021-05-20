import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-container">
        <Link to="/" className="home-button">
          <li>artclub.</li>
        </Link>
        <div className="right-buttons">
          <Link to="/explore" className="explore-button">
            <li>explore</li>
          </Link>
          <Link to="/profile" className="profile-button">
            <li>my &nbsp;galleries</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
