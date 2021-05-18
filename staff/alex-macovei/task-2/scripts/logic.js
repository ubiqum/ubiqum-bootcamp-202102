var uniqueStates = 0;

function retrieveMembersByParties(parties) {        //Filters members by selected party
    var members = data.results[0].members
    var filteredMembers = members.filter(function (member) {
        return parties.includes(member.party)
    })

    return filteredMembers
}

function retrieveMembersByStates(states) {      //Filters members by selected state
    var members = data.results[0].members

    var filteredMembersStates = members.filter(function (member) {
        return states.includes(member.state)
    })

    return filteredMembersStates
}

function retrieveStates() {     //Retrieves states from data json
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


function countPartyMembers() {      //Counts members from all partys and includes them into statistics

    statistics.numDemocrats = retrieveMembersByParties(["D"]).length;
    statistics.numRepublicans = retrieveMembersByParties(["R"]).length;
    statistics.numIndependents = retrieveMembersByParties(["ID"]).length;

}

function calculateAverageVotes(members) {       //Calculates percentage of votes from members
    var average = 0;
    for (var i = 0; i < members.length; i++) {
        average += members[i].votes_with_party_pct;
    }
    average /= members.length;

    return average;
}

function includeAverageVotes() {        //Includes votes percentage from all members in statistics
    statistics.democratsVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(["D"]))) + "%";
    statistics.republicansVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(["R"]))) + "%";
}

function sortMemberPercentage(members) {
    var member = {};
    for (var a = 0; a < members.length; a++) {     //Sorts members by percentage from most to least
        for (var i = 0; i < members.length - 1; i++) {
            if (members[i].votes_with_party_pct > members[i + 1].votes_with_party_pct) {
                member = members[i];
                members[i] = members[i + 1];
                members[i + 1] = member;
            }
        }
    }
    return members;
}

function sortMemberPercentageOposite(members) {     //Sorts members by percentage from least to most
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

function sortMemberByVotes(members) {       //Sorts members by ammount of votes
    var member = {};
    for (var a = 0; a < members.length; a++) {
        for (var i = 0; i < members.length - 1; i++) {
            if (members[i].total_votes > members[i + 1].total_votes) {
                member = members[i];
                members[i] = members[i + 1];
                members[i + 1] = member;
            }
        }
    }
    return members;
}
function sortMemberByMissedVotes(members) {     //Sorts members by missing votes from least to most

    var member = {};
    for (var a = 0; a < members.length; a++) {
        for (var i = 0; i < members.length - 1; i++) {
            if (members[i].missed_votes > members[i + 1].missed_votes) {
                member = members[i];
                members[i] = members[i + 1];
                members[i + 1] = member;
            }
        }
    }
    return members;
}

function sortMemberByMissedVotesOposite(members) {   //Sorts members by missing votes from most to least

    var member = {};
    for (var a = 0; a < members.length; a++) {
        for (var i = 0; i < members.length - 1; i++) {
            if (members[i].missed_votes < members[i + 1].missed_votes) {
                member = members[i];
                members[i] = members[i + 1];
                members[i + 1] = member;
            }
        }
    }
    return members;
}

function getTenPercent(members) {    //Simply takes the 10% of the members
    var tenPercent = members.length / 10;
    var returnMembers = [];
    for (var i = 0; i < tenPercent; i++) {
        returnMembers[i] = members[i];
    }
    return returnMembers;
}

function lowestPartyVotes(members) {    //Finds the 10% lowest votes percentage, and includes members that are outside the 10% but have the same percentage as sombody in the 10%
    var tenPercent = members.length / 10;
    var returnArray = [];
    var a = 0;
    for (var i = 0; i < tenPercent; i++) {
        returnArray.push(members[i]);
        if (i == tenPercent && members[i].votes_with_party_pct === members[i + 1].votes_with_party_pct) i--
    }
    return returnArray;
}

function MemberVotesWithParty(member) {    //Calculates the votes to party from different members

    var result = member.total_votes / (100 / member.votes_with_party_pct);

    return Math.round(result);
}
