/* export const setCities = (cities) => ({
  type: "SET_CITIES",
  payload: cities,
}); */

// TODO move to logic folder and include test
export const retrieveCities = () => (dispatch) => {
  fetch("http://localhost:5000/cities/all")
    .then((res) => res.json())
    .then((cities) =>
      dispatch({
        type: "RETRIEVE_CITIES",
        payload: cities,
      })
    );
};

/* 
export const addCity = (city) => {
  return {
    type: "ADD_CITY",
    payload: city,
  };
};

export const deleteCity = (id) => {
  return {
    type: "DELETE_CITY",
    id: id,
  };
};
 */
/* 
export const retrieveCities = () => (dispatch) => {
  fetch("http://localhost:5000/cities/all")
    .then(res => res.json())
    .then(cities => 
      dispatch({
        type: "RETRIEVE_CITIES",
        payload: cities
    }))
};

export const createCity = (cityData) => (dispatch) => {
  fetch("http://localhost:5000/cities/all", {
  method: "POST",
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(cityData)
  })
    .then(res => res.json())
    .then(city => 
      dispatch({
        type: "NEW_CITY"
        payload: city
    }))
};

export function retrieveCities () {
  return function(dispatch) {
  fetch("http://localhost:5000/cities/all")
    .then(res => res.json())
    .then(cities => 
      dispatch({
        type: "RETRIEVE_CITIES"
        payload: cities
    }

 */
