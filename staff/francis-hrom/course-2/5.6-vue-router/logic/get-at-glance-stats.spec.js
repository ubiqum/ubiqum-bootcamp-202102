describe("get-least-most-members.js", function () {
  var memberType, sortFx, sortElement;

  describe("when input are valid options 'senate', 'sortAscending', 'missed_votes_pct'  ", function () {
    beforeEach(function () {
      memberType = "senate";
      sortFx = sortAscending;
      sortElement = "missed_votes_pct";
    });

    it("should succeed with results", function (done) {
      getLeastMostMembers(memberType, sortFx, sortElement)
        .then(function (result) {
          expect(result).to.exist;
          expect(result).not.to.be.empty;
          done();
        })
        .catch(done);
    });
  });
});
