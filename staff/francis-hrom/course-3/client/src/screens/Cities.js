import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { loadCities } from "../store/reducers/cityReducer";

import HomeButton from "../components/HomeButton";
import LogOut from "../components/LogOut";

//import PropTypes from 'prop-types'
import { retrieveCities } from "../store/actions/cityActions";

/*
onSubmit(e) {
  e.preventDefault();

  const city = {
      name: state.name,
      country: state.country,
      img: state.img
  }

  props.createCity(city);
}
 */

const Cities = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(loadCities());
    dispatch(retrieveCities());
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const cities = props.cities;

  return (
    <div>
      <h1>Cities.js</h1>
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

/*
Cities.propTypes {
  retrieveCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
   // createCity: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    cities: state.cities.cities,
    newCity: state.cities.city
};

const mapDispatchToProps = (dispatch) => {
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


export default connect(mapStateToProps, {createCity})(Cities);
*/

export default connect(mapStateToProps, { retrieveCities })(Cities);
