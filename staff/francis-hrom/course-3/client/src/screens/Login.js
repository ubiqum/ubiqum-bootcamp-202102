import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import HomeButton from "../components/HomeButton";

// Login

const Login = (props) => {
  const users = props.users;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          alert(
            "User with this email already exist. Please login with that email or use another email."
          );
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        //console.log("responseJson:");
        //console.log(responseJson);
        // add redirect after login
        alert("New user created.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    <div>
      <h1>Login.js</h1>
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

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(Login);
