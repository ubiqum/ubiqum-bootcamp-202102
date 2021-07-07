import registerUser from "./registerUser";
import axios from "axios";

jest.mock("axios");

describe("registerUser", () => {
  describe("test with valid input", () => {
    const user = {
      name: "John Doe",
      email: "test@test.com",
      password: "hashedPassword",
    };

    it("should call endpoint with given user data", async () => {
      await registerUser(user);
      axios.post.mockImplementationOnce(() => Promise.resolve(user));
      expect(axios.post).toBeCalledWith(
        "http://localhost:5000/users/registration",
        user
      );
    });

    it("successfully retrieves data from server", async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve(user));
      await expect(registerUser(user)).resolves.toEqual(user);
    });

    it("gets error while retrieving data from server", async () => {
      const errorMessage = "Network Error";
      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(registerUser(user)).rejects.toThrow(errorMessage);
    });
  });

  describe("testing with invalid inputs", () => {
    it("should get error message with invalid input user data", async () => {
      const user = 123456;
      const errorMessage = `${user} is not an object`;

      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(registerUser(user)).rejects.toThrow(errorMessage);
    });
  });
});
