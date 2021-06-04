import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../store/actions/authActions";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// change to LogInOut
// save the JWT from server to localStorage

const LogOut = (props) => {
  const dispatch = useDispatch();
  const handleClickLogOut = () => {
    dispatch(logoutUser());
    window.location.href = "/";
  };

  useEffect(() => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated

      dispatch(setCurrentUser(decoded));
      //store.dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        //  store.dispatch(logoutUser());

        dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
      }
    }
  }, [props.auth.isAuthenticated, localStorage.jwtToken]);

  const auth = props.auth;
  return (
    <div>
      {auth.isAuthenticated ? (
        <>
          <p>User: {auth.user.name} </p>
          <Button
            variant="primary"
            size="sm"
            type="submit"
            onClick={handleClickLogOut}
          >
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Row>
            <Col>
              <Link to="/login">
                <Button variant="primary" size="sm" type="submit">
                  Login
                </Button>
              </Link>
            </Col>
            <Col></Col>
          </Row>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(LogOut);
