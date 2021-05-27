import { expect } from "chai";
import "../utils/random";
import fetch from "node-fetch";

global.fetch = fetch;

import retrieveSocialMedia from "./retrieve-social-media";

describe("retrieveSocialMedia", () => {
  let url;

  describe("when input is working URL https://adams.house.gov/", () => {
    beforeEach(() => {
      url = "https://adams.house.gov/";
    });

    it("should succeed", () =>
      retrieveSocialMedia(url).then((result) => {
        expect(result).to.exist;
        expect(result).not.to.be.empty;
      }));
  });
});
