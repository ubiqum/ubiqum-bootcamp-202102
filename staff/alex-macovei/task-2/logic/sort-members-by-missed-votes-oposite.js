/**
 * Sorts members by missing votes from most to least
 * 
 * @param {Array} members The members to sort
 * 
 * @returns {Array} Returns the sorted members
 */
 function sortMemberByMissedVotesOposite(members) {
    var member = {};

    for (var a = 0; a < members.length; a++) {
        for (var i = 0; i < members.length - 1; i++) {
            if (members[i].missed_votes < members[i + 1].missed_votes ) {
                member = members[i];
                members[i] = members[i + 1];
                members[i + 1] = member;
            }
        }
    }

    return members;
}