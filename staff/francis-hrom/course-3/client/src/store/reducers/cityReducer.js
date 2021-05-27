import { setCities } from "../actions/cityActions";

const initialState = {
  cities: [
    {
      _id: "5cf6aafbc003394d306a541e",
      img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1559669413/MERN/20170624_104816.jpg",
      name: "Amsterdam",
      country: "Netherland",
      __v: 0,
    },
  ],
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CITIES": {
      return {
        ...state,
        cities: action.payload,
      };
    }
    /*     case "ADD_CITY": {
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    }
    case "DELETE_CITY": {
      let newCities = state.cities.filter((city) => {
        return action.id !== city.id;
      });
      return {
        ...state,
        cities: newCities,
      };
    } */
    default:
      return state;
  }
}

// move to src/logic, for async things use Redux Thunk Middleware
// Thunk function

/* export async function  retrieveCities {
  const res = await fetch("http://localhost:5000/cities/all");
  const data = await res.json();
  return data;
}; */

/* const citiesFromServer = ["empty"];
console.log(citiesFromServer);
retrieveCities().then((results) => (citiesFromServer = results));
console.log(citiesFromServer);
 */

export const loadCities = () => async (dispatch, getState) => {
  const res = await fetch("http://localhost:5000/cities/all");
  const cities = await res.json();
  dispatch(setCities(cities));
};
