// import { createUser } from "../actions/userActions";

const initialState = {
  users: ["empty"],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
}

/* export const addUser = async (user) => async (dispatch, getState) => {
  console.log(user);
  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    //body: user,
    body: JSON.stringify(user),
  });
  const data = await res.json();
  console.log(data);
  dispatch(createUser(data));
}; */

/* export const addUser = async (user) => async (dispatch, getState) => {
  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  dispatch(createUser(data));
}; */
