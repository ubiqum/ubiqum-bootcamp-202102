import axios from "axios";
import { FormatError } from "../errors";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function authenticateUser(email, password) {
  if (typeof email !== "string")
    throw new TypeError(`${email} is not a string`);
  if (!EMAIL_REGEX.test(email))
    throw new FormatError(`${email} is not a valid e-mail`);
  if (typeof password !== "string")
    throw new TypeError(`${password} is not a string`);

  return axios
    .post("http://localhost:5000/users/login", { email, password })
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;

      return token;
    });
}

// DEMO

// try {
//   await authenticateUser(email, password);
// } catch (error) {
//   if (error instanceof TypeError)
//     setFeedback({
//       type: "TypeError",
//       message: error.message,
//     });
//   else if (error instanceof FormatError)
//     setFeedback({
//       type: "FormatError",
//       message: error.message,
//     });
//   else {
//     setFeedback({
//       type: "UnknownError",
//       message: error.message,
//     });
//   }
// }

// return (
//   <>
//     {feedback && feedback.type === "TypeError" && (
//       <p className="type-error">{feedback.message}</p> /* yellow */
//     )}
//     {feedback && feedback.type === "FormatError" && (
//       <p className="format-error">{feedback.message}</p> /* orange */
//     )}
//     {feedback && feedback.type === "UnknownError" && (
//       <p className="unknown-error">{feedback.message}</p> /* red */
//     )}
//   </>
// );
