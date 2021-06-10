import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HomeButton from "../components/HomeButton";
import Activity from "../components/Activity";
import LogOut from "../components/LogOut";

import { loadActivities } from "../store/reducers/itineraryReducer";

import { retrieveFavoriteActivities } from "../logic";

const Itinerary = (props) => {
  const { city } = useParams();

  const dispatch = useDispatch();

  const [favoriteActivities, setFavoriteActivities] = useState([]);

  useEffect(() => {
    dispatch(loadActivities(city));

    retrieveFavoriteActivities(props.userId)
      .then((result) => {
        setFavoriteActivities(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const activities = props.activities;

  return (
    <div>
      <LogOut />
      <h2>{city}</h2>
      <Row>
        {activities.map((activity) => (
          <Activity
            key={activity._id}
            activity={activity}
            user={props.user}
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
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Itinerary);
