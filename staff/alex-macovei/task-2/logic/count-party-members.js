/**
 * Counts the party members and includes them into statistics
 */
 function countPartyMembers(members) {
    statistics.numDemocrats = retrieveMembersByParties(members, ["D"]).length;
    statistics.numRepublicans = retrieveMembersByParties(members, ["R"]).length;
    statistics.numIndependents = retrieveMembersByParties(members, ["ID"]).length;
}