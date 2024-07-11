import "./Card.css";
import { FaStar, FaDownload } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-wrapper">
        <img src={props.imghref} alt="" className="most-popular-item-img" />

        <div className="most-popular-item-content">
          <h6 className="most-popular-item-title">
            {props.title} <br />
            <span>{props.soc}</span>
          </h6>

          <ul className="most-popular-item-rank">
            <li>
              {/* <i className="bi bi-star-fill me-2"></i> */}
              <span className="star-icon">
                <FaStar />
              </span>
              <span>{props.rank}</span>
            </li>
            <li>
              {/* <i className="bi bi-cloud-arrow-down-fill me-2"></i> */}
              <span className="download-icon">
                <FaDownload />
              </span>
              <span>{props.downloads}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
