/**
 * Calculates percentage of votes from members
 * 
 * @param {Array} members The states to filter from
 * 
 * @returns {Int} Returns the average of votes
 */
 function calculateAverageVotes(members) {
    var averageVotes = 0;

    for (var i = 0; i < members.length; i++) {
        if(!isNaN(members[i].votes_with_party_pct)) {averageVotes += members[i].votes_with_party_pct;}
    }

    averageVotes /= members.length;

    return averageVotes;
}