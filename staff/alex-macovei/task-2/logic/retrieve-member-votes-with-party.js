/**
 * Calculates the votes to party from specific member
 * 
 * @param {Array} member the member to calculate from
 * 
 * @returns {int} returns the rounded calculated votes
 */
 function retrieveMemberVotesWithParty(member) {
    var votesWithParty = member.total_votes / (100 / member.votes_with_party_pct);

    return Math.round(votesWithParty);
}