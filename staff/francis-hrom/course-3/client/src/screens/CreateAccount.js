import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import HomeButton from "../components/HomeButton";

import { registerUser } from "../logic";

const CreateAccount = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (user) => {
    registerUser(user)
      .then((responseJson) => {
        alert("New user created."); // TODO create a feedback panel for errors, do not use the native alert modal window
        props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Jane Doe"
              {...register("name")}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="jane@doe.com"
              {...register("email")}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Account
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

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(CreateAccount);
