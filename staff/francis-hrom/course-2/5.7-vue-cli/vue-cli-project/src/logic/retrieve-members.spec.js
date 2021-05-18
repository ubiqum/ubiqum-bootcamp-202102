import { expect } from "chai";
import "../utils/random";
import { LocalStorage } from "node-localstorage";
import fetch from "node-fetch";

global.localStorage = new LocalStorage("./local-storage");
global.fetch = fetch;

import retrieveMembers from "./retrieve-members";

describe("retrieveMembers", () => {
  let type, parties, state;

  describe("when input are valid options type 'senate', parties ['ID', 'D', 'R'] and state 'al' (Alabama)", () => {
    beforeEach(() => {
      type = "senate";
      parties = ["ID", "D", "R"];
      state = "al";
    });

    it("should succeed retrieving members filtered by type, party and state", () =>
      retrieveMembers(type, parties, state).then((result) => {
        expect(result).to.exist;
        expect(result).not.to.be.empty;
      }));
  });

  describe("when inputs are invalid", () => {
    describe("for type", () => {
      let type;
      const values = [1, true, {}, [], function () {}, null, undefined];

      beforeEach(() => (type = values.random()));

      it("should fail on non-string type", () => {
        expect(() => {
          retrieveMembers(type);
        }).to.throw(TypeError, `${type} is not a string`);
      });
    });

    describe("for property", () => {
      let property;
      const values = [1, true, {}, "abc", function () {}, null, undefined];

      beforeEach(() => (parties = values.random()));

      it("should fail on non-array parties", () => {
        expect(() => {
          retrieveMembers("senate", parties, "al");
        }).to.throw(TypeError, `${parties} is not an array or null`);
      });
    });

    describe("for state", () => {
      let state;
      const values = ["", true, {}, [], function () {}, null, undefined];

      beforeEach(() => (state = values.random()));

      it("should fail on non-string state", () => {
        expect(() => {
          retrieveMembers("senate", ["ID", "D", "R"], state);
        }).to.throw(TypeError, `${state} is not a string`);
      });
    });
  });
});
