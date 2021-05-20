countPartyMembers();
includeAverageVotes();
renderAtGlanceTable();
renderMostEngaged(getTenPercent(sortMemberByMissedVotes(retrieveAllMembers())));
renderLeastEngaged(getTenPercent(sortMemberByMissedVotesOposite(retrieveAllMembers())));
