import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CityButton from "../components/CityButton";

const Landing = () => {
  return (
    <div>
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
};

export default Landing;
