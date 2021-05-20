import { Link } from "react-router-dom";

function VisitGalleries() {
  return (
    <div>
      <Link to="/profile" className="visit-galleries-button">
        <p className="simple-button-text">visit my galleries</p>
        <img src="img/black-arrow-thick.svg" alt="" className="symbol" />
      </Link>
    </div>
  );
}

export default VisitGalleries;
