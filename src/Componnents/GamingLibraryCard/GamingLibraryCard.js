import "./GamingLibraryCard.css";
import { TertiaryButton } from "../index";

const GamingLibraryCard = (props) => {
  return (
    <div className="gaming-library-item">
      <ul>
        <li className="gaming-library-item-img">
          <img src={props.imghref} alt="" />
        </li>
        <li>
          <h6>{props.title}</h6>
          <span>{props.soc}</span>
        </li>
        <li>
          <h6>Date Added</h6>
          <span>{props.dateAdded}</span>
        </li>
        <li>
          <h6>Hours Played</h6>
          <span>{props.hoursPlayed}</span>
        </li>
        <li>
          <h6>Currently</h6>
          <span>{props.downloadState}</span>
        </li>
        <li>
          <TertiaryButton link="#downl">Download</TertiaryButton>
        </li>
      </ul>
    </div>
  );
};

export default GamingLibraryCard;
