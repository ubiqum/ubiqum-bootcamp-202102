countPartyMembers();
includeAverageVotes();
renderAtGlanceTable();
renderLoyal(getTenPercent(sortMemberPercentage(data.results[0].members)), "tbodyMostLoyal");
renderLoyal(getTenPercent(sortMemberPercentageOposite(data.results[0].members)), "tbodyLeastLoyal");