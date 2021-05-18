import { expect } from "chai";
import "../utils/random";
import { LocalStorage } from "node-localstorage";
import fetch from "node-fetch";

global.localStorage = new LocalStorage("./local-storage");
global.fetch = fetch;

import getLeastMostMembers from "./get-least-most-members";

describe("getLeastMostMembers", () => {
  let type, property, order;

  describe("when input are valid options type 'senate', property 'missed_votes_pct' and order 1 (ascending)", () => {
    beforeEach(() => {
      type = "senate";
      property = "missed_votes_pct";
      order = 1;
    });

    it("should succeed retrieving members filtered by type, and sorted by property and order specified", () =>
      getLeastMostMembers(type, property, order).then((result) => {
        expect(result).to.exist;
        expect(result).not.to.be.empty;

        // TODO check that order is ascending by the specified property
      }));

    describe("when order -1 (descending)", () => {
      beforeEach(() => {
        type = "senate";
        property = "missed_votes_pct";
        order = -1;
      });

      it("should succeed retrieving members filtered by type, and sorted by property and order -1 (descending)", () =>
        getLeastMostMembers(type, property, order).then((result) => {
          expect(result).to.exist;
          expect(result).not.to.be.empty;

          // TODO check that order is ascending by the specified property
        }));
    });
  });

  describe("when inputs are invalid", () => {
    describe("for type", () => {
      let type;
      const values = [1, true, {}, [], function () {}, null, undefined];

      beforeEach(() => (type = values.random()));

      it("should fail on non-string type", () => {
        expect(() => {
          getLeastMostMembers(type, "missed_votes_pct", 1);
        }).to.throw(TypeError, `${type} is not a string`);
      });
    });

    describe("for property", () => {
      let property;
      const values = [1, true, {}, [], function () {}, null, undefined];

      beforeEach(() => (property = values.random()));

      it("should fail on non-string property", () => {
        expect(() => {
          getLeastMostMembers("senate", property, 1);
        }).to.throw(TypeError, `${property} is not a string`);
      });
    });

    describe("for order", () => {
      let order;
      const values = ["abc", true, {}, [], function () {}, null, undefined];

      beforeEach(() => (order = values.random()));

      it("should fail on non-number order", () => {
        expect(() => {
          getLeastMostMembers("senate", "missed_votes_pct", order);
        }).to.throw(TypeError, `${order} is not a number`);
      });
    });
  });
});
