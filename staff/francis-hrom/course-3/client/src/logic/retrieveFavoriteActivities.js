import axios from "axios";

function retrieveFavoriteActivities(userId) {
  if (typeof userId !== "string")
    throw new TypeError(`${userId} is not a string`);
  return axios(`http://localhost:5000/users/${userId}/get-favorite`).then(
    (response) => response.text()
  );
}

export default retrieveFavoriteActivities;
