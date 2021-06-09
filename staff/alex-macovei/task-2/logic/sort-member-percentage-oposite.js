/**
 * Sorts members by percentage from least to most
 * 
 * @param {Array} members The members to sort
 * 
 * @returns {Array} Returns the sorted members
 */
 function sortMemberPercentageOposite(members) {
    var member = {};

    for (var a = 0; a < members.length; a++) {
        for (var i = 0; i < members.length - 1; i++) {
            if (members[i].votes_with_party_pct < members[i + 1].votes_with_party_pct) {
                member = members[i];
                members[i] = members[i + 1];
                members[i + 1] = member;
            }
        }
    }

    return members;
}