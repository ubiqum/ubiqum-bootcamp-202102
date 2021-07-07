import axios from "axios";

function registerUser(user) {
  if (typeof user !== "object") throw new TypeError(`${user} is not an object`);
  return axios("http://localhost:5000/users/registration", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 400) {
      throw new Error(
        "User with this email already exist. Please login with that email or use another email."
      );
    } else {
      throw new Error("Something went wrong");
    }
  });
}

export default registerUser;
