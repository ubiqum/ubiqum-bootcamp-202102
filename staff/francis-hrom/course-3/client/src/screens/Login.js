import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";

import HomeButton from "../components/HomeButton";
import { loginUser } from "../store/actions/authActions";
import LogOut from "../components/LogOut";

const Login = (props) => {
  const auth = props.auth;
  const errors = props.errors;

  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("jwtToken", token);
      props.history.push("/cities");
    }
  }, [token]);

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/cities");
    }
  }, [props.auth.isAuthenticated]);

  const { register, handleSubmit, watch } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (user) => {
    dispatch(loginUser(user));
  };

  return (
    <div>
      <LogOut />
      {errors.length > 0 ? (
        <Alert variant="danger">
          {errors.emailnotfound} {errors.passwordincorrect}
        </Alert>
      ) : (
        ""
      )}
      <Row>
        <Col>
          <a href="http://localhost:5000/users/login/google">
            <Button variant="primary" type="submit">
              Login with Google
            </Button>
          </a>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <h6>OR login with:</h6>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" {...register("email")} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" {...register("password")} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
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

const mapStateToProps = (state) => ({
  users: state.users.users,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
