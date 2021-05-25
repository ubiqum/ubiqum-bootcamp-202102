function retrieveJsonData(callback) {
    fetch("https://api.propublica.org/congress/v1/116/senate/members.json", {
        headers: {
            "X-API-Key": "8bBfJYRI5ZDmwRP7uDnJwXbWUmxFbZZ4n6pdepkY"
        }
    })
        .then(response => response.json())
        .then(data => callback(data))
}
/**
 * Retrieves members filtered by parties
 * 
 * @param {Array} parties The parties to filter from
 * 
 * @returns {Array} The filtered members
 */
function retrieveMembersByParties(parties) {
    var members = data.results[0].members

    var filteredMembers = members.filter(function (member) {
        return parties.includes(member.party)
    })

    return filteredMembers
}

/**
 * Retrieves members filtered by states
 * 
 * @param {Array} States The states to filter from
 * 
 * @returns {Array} The filtered members
 */
function retrieveMembersByStates(states) {
    var members = data.results[0].members

    var filteredMembersStates = members.filter(function (member) {
        return states.includes(member.state)
    })

    return filteredMembersStates
}

/**
 * Retrieves the states and filters them
 * 
 * @returns {Array} The filtered states
 */
function retrieveStates() {
    var members = data.results[0].members;
    var states = [];

    for (var i = 0; i < members.length; i++) {
        if (!states.includes(members[i].state)) {
            states.push(members[i].state);
        }
    }

    return states.sort();
}

/**
 * Counts the party members and includes them into statistics
 */
function countPartyMembers() {
    statistics.numDemocrats = retrieveMembersByParties(["D"]).length;
    statistics.numRepublicans = retrieveMembersByParties(["R"]).length;
    statistics.numIndependents = retrieveMembersByParties(["ID"]).length;
}

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
        averageVotes += members[i].votes_with_party_pct;
    }

    averageVotes /= members.length;

    return averageVotes;
}

/**
 * Includes votes percentage from all members in statistics
 */
function includeAverageVotes() {
    statistics.democratsVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(["D"]))) + "%";
    statistics.republicansVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(["R"]))) + "%";
}

/**
 * Sorts members by percentage from most to least
 * 
 * @param {Array} members The members to sort
 * 
 * @returns {Array} Returns the sorted members
 */
function sortMemberPercentage(members) {
    var member = {};

    for (var a = 0; a < members.length; a++) {
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

/**
 * Sorts members by ammount of votes
 * 
 * @param {Array} members The members to sort
 * 
 * @returns {Array} Returns the sorted members
 */
function sortMemberByVotes(members) {
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

/**
 * Sorts members by missing votes from least to most
 * 
 * @param {Array} members The members to sort
 * 
 * @returns {Array} Returns the sorted members
 */
function sortMemberByMissedVotes(members) {
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

/**
 * Sorts members by missing votes from most to least
 * 
 * @param {Array} members The members to sort
 * 
 * @returns {Array} Returns the sorted members
 */
function sortMemberByMissedVotesOposite(members) {
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

/**
 * takes the first 10% of the given members
 * 
 * @param {Array} members the members from which to take 10% of
 * 
 * @returns {Array} Returns the first 10% of the members
 */
function getTenPercent(members) {
    var tenPercent = members.length / 10;
    var returnMembers = [];

    for (var i = 0; i < tenPercent; i++) {
        returnMembers[i] = members[i];
    }

    return returnMembers;
}

/**
 * Finds the 10% lowest votes percentage, and includes members that are outside the 10% but have the same percentage as sombody in the 10%
 * 
 * @param {Array} members the members from which to take 10% of
 * 
 * @returns {Array} Returns the first 10% of the members and more if they have the same percentage
 */
function retrieveLowestPartyVotes(members) {
    var tenPercent = members.length / 10;
    var lowestPartyVotes = [];
    var a = 0;

    for (var i = 0; i < tenPercent; i++) {
        lowestPartyVotes.push(members[i]);

        if (i == tenPercent && members[i].votes_with_party_pct === members[i + 1].votes_with_party_pct)
            i--
    }

    return lowestPartyVotes;
}

/**
 * Calculates the votes to party from specific member
 * 
 * @param {Array} members the member to calculate from
 * 
 * @returns {int} returns the rounded calculated votes
 */
function retrieveMemberVotesWithParty(member) {
    var votesWithParty = member.total_votes / (100 / member.votes_with_party_pct);

    return Math.round(votesWithParty);
}

/**
 * retrieves all members from the json file
 */
function retrieveAllMembers() {
    return data.results[0].members;
}

