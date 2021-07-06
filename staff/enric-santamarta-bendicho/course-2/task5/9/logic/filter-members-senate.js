function filterMembersSenate(parties, state, callback) {
    retrieveMembersSenate(function (members) {
        var filteredMembersSenate = members

        if (parties.length) {
            filteredMembersSenate = filteredMembersSenate.filter(
                function (member) {
                    return parties.includes(member.party);
                }
            );
        }

        if (state) {
            filteredMembersSenate = filteredMembersSenate.filter(
                function (member) {
                    return member.state === state;
                }
            );
        }

        callback(filteredMembersSenate);
    });
}