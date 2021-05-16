describe("retrieve-members.js", function () {
  var type, parties, state;

  describe("when input are valid options 'senate', array with parties D, R, ID and state 'al' (for Alabama)", function () {
    beforeEach(function () {
      type = "senate";
      parties = ["D", "R", "ID"];
      state = "al";
    });

    it("should succeed with results", function (done) {
      retrieveMembers(type, parties, state)
        .then(function (result) {
          expect(result).to.exist;
          expect(result).not.to.be.empty;
          done();
        })
        .catch(done);
    });
  });
});
