import { expect } from "chai";
import "../utils/random";
import { LocalStorage } from "node-localstorage";
import fetch from "node-fetch";

global.localStorage = new LocalStorage("./local-storage");
global.fetch = fetch;

import getStatesMap from "./get-states-map";

describe("getStatesMap", () => {
  describe("when called without any parameter", function () {
    it("should succeed with results", function (done) {
      getStatesMap()
        .then(function (result) {
          expect(result).to.exist;
          expect(result).not.to.be.empty;
          done();
        })
        .catch(done);
    });
  });
});
