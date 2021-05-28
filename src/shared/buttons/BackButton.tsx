import { useHistory } from "react-router-dom";

function BackButton() {
  const history = useHistory();
  function goBack() {
    history.push("/explore");
  }

  return (
    <div className="back-button-container">
      <img
        src="img/black-arrow.svg"
        alt="back arrow"
        className="back-arrow"
        onClick={goBack}
      />
    </div>
  );
}

export default BackButton;
