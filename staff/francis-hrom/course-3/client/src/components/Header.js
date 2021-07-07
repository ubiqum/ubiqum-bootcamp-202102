import Row from "react-bootstrap/Row";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <div>
      <Row>
        <Logo />
      </Row>
      <Row>
        <p>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>
      </Row>
    </div>
  );
};

export default Header;
