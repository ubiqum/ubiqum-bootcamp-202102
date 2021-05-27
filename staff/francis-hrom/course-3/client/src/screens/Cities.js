import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { loadCities } from "../store/reducers/cityReducer";

import HomeButton from "../components/HomeButton";

const Cities = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCities());
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const cities = props.cities;

  return (
    <div>
      <h1>Cities.js</h1>
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
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
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

/* const mapDispatchToProps = (dispatch) => {
  return {
    addCity: (city) => {
      dispatch(addCity(city));
    },
    deleteCity: (id) => {
      dispatch(deleteCity(id));
    },
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

*/

export default connect(mapStateToProps)(Cities);
