var uniqueStates = 0;

function retrieveMembersByParties(parties) {
    var members = data.results[0].members
    var filteredMembers = members.filter(function(member){
        return parties.includes(member.party)
    })

    return filteredMembers
}

function retrieveMembersByStates(states) {  
    var members = data.results[0].members

    var filteredMembersStates = members.filter(function(member){
        return states.includes(member.state)
    })

    return filteredMembersStates
}

function retrieveStates() {
    var members = data.results[0].members;
    var states = [];
    for (var i = 0; i < members.length; i++) {
        if (!states.includes(members[i].state)) {
            states[i] = members[i].state;
            states.sort();
            uniqueStates++;
        }
    }

    return states
}


function countPartyMembers(){
    
    statistics.numDemocrats = retrieveMembersByParties(["D"]).length;
    statistics.numRepublicans = retrieveMembersByParties(["R"]).length;
    statistics.numIndependents = retrieveMembersByParties(["ID"]).length;

}

function calculateAverageVotes(array){
    var average = 0;
    for (var i = 0;i<array.length;i++){
        average += array[i].votes_with_party_pct;
    }
    average /= array.length;

    return average;
}

function includeAverageVotes(){
    statistics.democratsVotesParty = calculateAverageVotes(retrieveMembersByParties(["D"]));
    statistics.republicansVotesParty = calculateAverageVotes(retrieveMembersByParties(["R"]));
}