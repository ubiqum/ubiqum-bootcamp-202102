describe("retrieve-legislators.js", function () {
  var state;

  describe("when input is valid option 'al' (for state Alabama)", function () {
    beforeEach(function () {
      state = "al";
    });

    it("should succeed with results", function (done) {
      retrieveLegislators(state)
        .then(function (result) {
          expect(result).to.exist;
          expect(result).not.to.be.empty;
          done();
        })
        .catch(done);
    });
  });
});
