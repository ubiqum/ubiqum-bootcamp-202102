import { expect } from "chai";
import "../utils/random";
import { LocalStorage } from "node-localstorage";
import fetch from "node-fetch";

global.localStorage = new LocalStorage("./local-storage");
global.fetch = fetch;

import getStatesList from "./get-states-list";

describe("getStatesList", () => {
  describe("when called without any parameter", function () {
    it("should succeed with results", function (done) {
      getStatesList()
        .then(function (result) {
          expect(result).to.exist;
          expect(result).not.to.be.empty;
          done();
        })
        .catch(done);
    });
  });
});
