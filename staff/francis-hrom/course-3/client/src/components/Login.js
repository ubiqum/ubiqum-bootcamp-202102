import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Row>
        <p>Want to build your own MYtinerary?</p>
      </Row>
      <Row>
        <Col>
          <p>Login</p>
        </Col>
        <Col>
          <Link to="/create-account">Create Account</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
