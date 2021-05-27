import React, { useState, useEffect } from "react";
//import { useSelector, connect } from "react-redux";
import { connect, useDispatch } from "react-redux";

//import { addCity, deleteCity } from "../store/actions/cityActions";
import { loadCities } from "../store/reducers/cityReducer";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HomeButton from "../components/HomeButton";

const Cities = (props) => {
  /*   const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const citiesCounter = useSelector((state) => state.cities);

  useEffect(() => {
    const getCities = async () => {
      const citiesFromServer = await fetchCities();
      setCities(citiesFromServer);
    };
    getCities();
  }, []);

  const fetchCities = async () => {
    const res = await fetch("http://localhost:5000/cities/all");
    const data = await res.json();
    return data;
  }; */

  //this is not working
  //console.log("this.props");
  //console.log(this.props);
  //console.log(props.cities.cities);

  //  {props.cities}
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
          <li key={city._id}>{city.name}</li>
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
