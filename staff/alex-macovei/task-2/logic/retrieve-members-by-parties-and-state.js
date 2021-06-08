function retrieveMembersByPartiesAndState(members, parties, state) {
    if (parties.length == 0) {
        var filteredMembersState = members.filter(function (member) {
            return state.includes(member.state)
        })

        return filteredMembersState
    }
    else if (state === '') {
        var filteredMembersParty = members.filter(function (member) {
            return parties.includes(member.party)
        })

        return filteredMembersParty
    }else if(state === '' && parties.length == 0)
    {
        return members;
    }  else {
        var filteredMembers = members.filter(function (member) {
            return parties.includes(member.party)
        })

        filteredMembers = filteredMembers.filter(function (filteredMembers) {
            return state.includes(filteredMembers.state)
        })
        return filteredMembers
    }

}