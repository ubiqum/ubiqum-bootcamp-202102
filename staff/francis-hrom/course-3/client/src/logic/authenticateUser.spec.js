import authenticateUser from "./authenticateUser";
import axios from "axios";

jest.mock("axios");

describe("authenticateUser", () => {
  describe("with valid input (email, password)", () => {
    const email = "test@test.com";
    const password = "password";
    const data = {
      token: "randomToken",
    };

    it("calls endpoint with given user credentials (email & password)", async () => {
      await authenticateUser(email, password);

      axios.post.mockImplementationOnce(() => Promise.resolve(data));

      expect(axios.post).toBeCalledWith("http://localhost:5000/users/login", {
        email,
        password,
      });
    });

    it("successfully retrieves data from server", async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve(data));

      await expect(authenticateUser(email, password)).resolves.toEqual(data);
    });

    it("throws error while retrieving data from server and connection fails", async () => {
      const errorMessage = "Network Error";

      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(authenticateUser(email, password)).rejects.toThrow(
        errorMessage
      );
    });
  });

  describe("with invalid inputs", () => {
    it("throws error when e-mail is not a string", async () => {
      const email = 123456;
      const password = "password";
      const errorMessage = `${email} is not a string`;

      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(authenticateUser(email, password)).rejects.toThrow(
        errorMessage
      );
    });

    it("throws error when e-mail format is not valid", async () => {
      const email = "test.test.com";
      const password = "password";
      const errorMessage = `${email} is not a valid e-mail`;

      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(authenticateUser(email, password)).rejects.toThrow(
        errorMessage
      );
    });

    it("throws error when password is not a string", async () => {
      const email = "test@test.com";
      const password = { 123: 123456 };
      const errorMessage = `${password} is not a string`;

      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(authenticateUser(email, password)).rejects.toThrow(
        errorMessage
      );
    });
  });
});
