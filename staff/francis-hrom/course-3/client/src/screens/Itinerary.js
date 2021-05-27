import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HomeButton from "../components/HomeButton";
import Activity from "../components/Activity";
import { loadActivities } from "../store/reducers/itineraryReducer";

const Itinerary = (props) => {
  const { city } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadActivities(city));
  }, []);

  const activities = props.activities;
  console.log(activities);
  return (
    <div>
      <h1>Itinerary.js</h1>
      <h2>{city}</h2>
      <Row>
        {activities.map((activity) => (
          <Activity activity={activity} />
        ))}{" "}
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
  };
};

export default connect(mapStateToProps)(Itinerary);
