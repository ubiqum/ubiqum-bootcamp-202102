describe("retrieve-states.js", function () {
  describe("when called without any parameter", function () {
    it("should succeed with results", function (done) {
      retrieveStates()
        .then(function (result) {
          expect(result).to.exist;
          expect(result).not.to.be.empty;
          done();
        })
        .catch(done);
    });
  });
});
