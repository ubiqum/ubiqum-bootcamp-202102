countPartyMembers();
includeAverageVotes();
renderAtGlanceTable();
renderMostLoyal(getTenPercent(sortMemberPercentage(retrieveAllMembers())));
renderLeastLoyal(getTenPercent(sortMemberPercentageOposite(retrieveAllMembers())));