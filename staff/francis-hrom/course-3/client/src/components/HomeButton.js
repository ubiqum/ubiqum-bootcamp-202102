import { Link } from "react-router-dom";

import homeIcon from "../assets/homeIcon.png";

const HomeButton = () => {
  return (
    <div>
      <Link to="/">
        <img src={homeIcon} className="img-fluid" alt="home icon"></img>
      </Link>
    </div>
  );
};

export default HomeButton;
