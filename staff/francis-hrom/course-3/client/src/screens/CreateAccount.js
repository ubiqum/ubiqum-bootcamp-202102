import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import HomeButton from "../components/HomeButton";
//import { addUser } from "../store/reducers/userReducer";

// name, email, password, picture URL (this will be a URL).
/*
? sending values to redux on submit button or logging it every keystroke

*/

const CreateAccount = (props) => {
  /*   const onSubmit = (e) => {
    e.preventDefault();
            if (!text) {
                  alert("Please add task");
                  return;
                } 
    alert("Submitted");
  }; */
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
      <h1>CreateAccount.js</h1>
      <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Jane Doe"
              {...register("name")}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="jane@doe.com"
              {...register("email")}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
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
