import { expect } from "chai";
import "../utils/random";
import { LocalStorage } from "node-localstorage";
import fetch from "node-fetch";

global.localStorage = new LocalStorage("./local-storage");
global.fetch = fetch;

import retrieveStates from "./retrieve-states";

describe("retrieveStates", () => {
  describe("when called without any parameter", () => {
    it("should succeed with results", () =>
      retrieveStates().then(function (result) {
        expect(result).to.exist;
        expect(result).not.to.be.empty;
      }));
  });
});
