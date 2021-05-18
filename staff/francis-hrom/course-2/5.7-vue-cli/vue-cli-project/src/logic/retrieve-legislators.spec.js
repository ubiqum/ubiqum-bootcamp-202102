import { expect } from "chai";
import "../utils/random";
import { LocalStorage } from "node-localstorage";
import fetch from "node-fetch";

global.localStorage = new LocalStorage("./local-storage");
global.fetch = fetch;

import retrieveLegislators from "./retrieve-legislators";

describe("retrieveLegislators", () => {
  let state;

  describe("when input are valid options: state 'al' (Alabama)", () => {
    beforeEach(() => {
      state = "al";
    });

    it("should succeed retrieving legislators by state", () =>
      retrieveLegislators(state).then((result) => {
        expect(result).to.exist;
        expect(result).not.to.be.empty;
      }));
  });

  describe("when inputs are invalid", () => {
    describe("for state", () => {
      let state;
      const values = ["", true, {}, [], function () {}, null, undefined];

      beforeEach(() => (state = values.random()));

      it("should fail on non-string state", () => {
        expect(() => {
          retrieveLegislators(state);
        }).to.throw(TypeError, `${state} is not a string`);
      });
    });
  });
});
