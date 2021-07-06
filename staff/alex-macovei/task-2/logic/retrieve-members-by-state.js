/**
 * Retrieves members filtered by states
 * 
 * @param {Array} State The states to filter from
 * 
 * @returns {Array} The filtered members
 */
 function retrieveMembersByState(members, state) {

    var filteredMembersStates = members.filter(function (member) {
        return state.includes(member.state)
    })

    return filteredMembersStates
}