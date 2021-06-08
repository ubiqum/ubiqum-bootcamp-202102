retrieveMembers(function (members) {
countPartyMembers(members);
includeAverageVotes(members);
renderAtGlanceTable();
renderMostEngaged(getTenPercent(sortMemberByMissedVotes(members)));
renderLeastEngaged(getTenPercent(sortMemberByMissedVotesOposite(members)));
})