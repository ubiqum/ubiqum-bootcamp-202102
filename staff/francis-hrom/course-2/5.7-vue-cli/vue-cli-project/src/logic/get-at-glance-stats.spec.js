import { expect } from "chai";
import "../utils/random";
import { LocalStorage } from "node-localstorage";
import fetch from "node-fetch";

global.localStorage = new LocalStorage("./local-storage");
global.fetch = fetch;

import getAtGlanceStats from "./get-at-glance-stats";

describe("getAtGlanceStats", () => {
  let type;

  describe("when input are valid options type 'senate'", () => {
    beforeEach(() => {
      type = "senate";
    });

    it("should succeed retrieving members filtered by type and calculating statistics", () =>
      getAtGlanceStats(type).then((result) => {
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
          getAtGlanceStats(type);
        }).to.throw(TypeError, `${type} is not a string`);
      });
    });

  });
});
