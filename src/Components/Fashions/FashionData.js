import { Link } from "react-router-dom";
import "./Fashions.Styles.css";

function FashionData(props) {
  const handleClick = () => {};
  return (
    <div className="homeEventDataCart">
      <div className="homeEventDataCart-image">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <Link to={props.url}>
        <button onClick={handleClick} className="event-button">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default FashionData;
