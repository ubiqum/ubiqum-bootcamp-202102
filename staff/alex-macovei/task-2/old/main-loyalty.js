retrieveMembers(function (members) {
countPartyMembers(members);
includeAverageVotes(members);
renderAtGlanceTable();
renderMostLoyal(getTenPercent(sortMemberPercentage(members)));
renderLeastLoyal(getTenPercent(sortMemberPercentageOposite(members)));
})