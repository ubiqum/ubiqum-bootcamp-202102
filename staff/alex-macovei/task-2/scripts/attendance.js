countPartyMembers();
includeAverageVotes();
renderAtGlanceTable();
renderEngaged(getTenPercent(sortMemberByMissedVotes(data.results[0].members)), "tbodyMostEngaged");
renderEngaged(getTenPercent(sortMemberByMissedVotesOposite(data.results[0].members)), "tbodyLeastEngaged");