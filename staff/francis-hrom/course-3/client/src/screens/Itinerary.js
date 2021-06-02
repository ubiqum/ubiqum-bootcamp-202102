import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HomeButton from "../components/HomeButton";
import Activity from "../components/Activity";
import LogOut from "../components/LogOut";

import { loadActivities } from "../store/reducers/itineraryReducer";

const Itinerary = (props) => {
  const { city } = useParams();

  const dispatch = useDispatch();

  const [favoriteActivities, setFavoriteActivities] = useState([]);

  useEffect(() => {
    dispatch(loadActivities(city));

    fetch(`http://localhost:5000/users/${props.userId}/get-favorite`)
      .then((response) => response.text())
      .then((result) => {
        setFavoriteActivities(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const activities = props.activities;

  return (
    <div>
      <h1>Itinerary.js</h1>
      <LogOut />
      <h2>{city}</h2>
      <Row>
        {activities.map((activity) => (
          <Activity
            activity={activity}
            userId={props.userId}
            favorite={favoriteActivities.includes(activity._id)}
          />
        ))}
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
    activities: state.activities.activities,
    userId: state.auth.user.id,
  };
};

export default connect(mapStateToProps)(Itinerary);
