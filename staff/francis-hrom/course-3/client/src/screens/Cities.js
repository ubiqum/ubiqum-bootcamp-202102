import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HomeButton from "../components/HomeButton";
import LogOut from "../components/LogOut";

import { retrieveCities } from "../store/actions/cityActions";

const Cities = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveCities());
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const cities = props.cities;

  return (
    <div>
      <LogOut />
      <input
        type="text"
        placeholder="Search ..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {cities
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().startsWith(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((city) => (
          <li key={city._id}>
            <Link to={`/cities/${city.name}`}>{city.name}</Link>
          </li>
        ))}
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
    cities: state.cities.cities,
  };
};

export default connect(mapStateToProps, { retrieveCities })(Cities);
