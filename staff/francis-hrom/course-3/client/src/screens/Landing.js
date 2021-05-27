import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CityButton from "../components/CityButton";

export default function Landing() {
  return (
    <div>
      <h1>Landing.js</h1>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col> </Col>
        <Col xs={6}>
          <CityButton />
        </Col>
        <Col> </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}
