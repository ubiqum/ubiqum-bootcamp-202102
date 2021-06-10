import retrieveFavoriteActivities from "./retrieveFavoriteActivities";
import axios from "axios";

jest.mock("axios");

describe("retrieveFavoriteActivities", () => {
  describe("test with valid input", () => {
    const userId = "userId123";
    const data = ["activity1Id", "activity2Id", "activity3Id"];

    it("should call endpoint with given user data", async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve(data));
      await retrieveFavoriteActivities(userId);
      expect(axios.post).toBeCalledWith(
        `http://localhost:5000/users/${userId}/get-favorite`,
        userId
      );
    });

    it("successfully retrieves data from server", async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve(data));
      await expect(retrieveFavoriteActivities(userId)).resolves.toEqual(data);
    });

    it("gets error while retrieving data from server", async () => {
      const errorMessage = "Network Error";
      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(retrieveFavoriteActivities(userId)).rejects.toThrow(
        errorMessage
      );
    });
  });

  describe("testing with invalid inputs", () => {
    it("should get error message with invalid input userId", async () => {
      const userId = { 123: 123456 };
      const errorMessage = `${userId} is not an string`;

      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(retrieveFavoriteActivities(userId)).rejects.toThrow(
        errorMessage
      );
    });
  });
});
