import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-container"></ul>
      <Link to="/" className="home-button">
        <li>Home</li>
      </Link>
      <Link to="/profile" className="profile-button">
        <li>Profile</li>
      </Link>
      <Link to="/explore" className="explore-button">
        <li>Explore</li>
      </Link>
    </nav>
  );
}

export default Nav;
