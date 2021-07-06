function filterMembersHouse(parties, state, callback) {
    retrieveMembersHouse(function (members) {
        var filteredMembersHouse = members

        if (parties.length) {
            filteredMembersHouse = filteredMembersHouse.filter(
                function (member) {
                    return parties.includes(member.party);
                }
            );
        }

        if (state) {
            filteredMembersHouse = filteredMembersHouse.filter(
                function (member) {
                    return member.state === state;
                }
            );
        }

        callback(filteredMembersHouse);
    });
}
