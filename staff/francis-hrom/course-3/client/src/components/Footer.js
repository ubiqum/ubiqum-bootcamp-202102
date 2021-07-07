import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Account from "../components/Account";
import HomeButton from "../components/HomeButton";

const Footer = () => {
  return (
    <div>
      <Row>
        <Col> </Col>
        <Col xs={10}>
          <Account />
        </Col>
        <Col> </Col>
      </Row>
      <Row>
        <Col> </Col>
        <Col xs={2}>
          <HomeButton />
        </Col>
        <Col> </Col>
      </Row>
    </div>
  );
};

export default Footer;
