import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <Row>
        <p>Want to build your own MYtinerary?</p>
      </Row>
      <Row>
        <Col>
          <Link to="/login">Login</Link>
        </Col>
        <Col>
          <Link to="/create-account">Create Account</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Account;
