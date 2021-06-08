/**
 * Retrieves members filtered by parties
 * 
 * @param {Array} parties The parties to filter from
 * 
 * @returns {Array} The filtered members
 */
 function retrieveMembersByParties(members, parties) {
    var filteredMembers = members.filter(function (member) {
        return parties.includes(member.party)
    })

    return filteredMembers
}