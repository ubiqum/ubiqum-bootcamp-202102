describe("get-at-glance-statistics.js", function () {
  var inputType;

  describe("when input type is valid option 'senate'", function () {
    beforeEach(function () {
      inputType = "senate";
    });

    it("should succeed with results", function (done) {
      getAtGlanceStats(inputType)
        .then(function (result) {
          expect(result).to.exist;
          expect(result).not.to.be.empty;
          done();
        })
        .catch(done);
    });
  });
});
