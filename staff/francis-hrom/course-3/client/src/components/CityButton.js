import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import rightArrow from "../assets/circled-right-2.png";

const CityButton = () => {
  return (
    <div>
      <Row>
        <h4>Start browsing</h4>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Link to="/cities">
            <img src={rightArrow} className="img-fluid" alt="right arrow"></img>
          </Link>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default CityButton;
