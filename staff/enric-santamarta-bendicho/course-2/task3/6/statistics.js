var members = data.results[0].members;
var democrats = 0
var republicans = 0
var independents = 0
var percentPartyDemocrats = []
var percentPartyRepublicans = []
var percentPartyIndependents = []
var numberVotes = []
var democratsPercentParty = 0
var republicansPercentParty = 0
var independentsPercentParty = 0
var percentParty = []
var percentParty2 = []
var party = []
var names = []
var leastVotes = []
var leastVotesNumbers = []
var leastVotesNames = []
var mostVotes = []
var mostVotesNumbers = []
var mostVotesNames = []
var missedVotes = []
var mostMissedVotes = []
var leastMissedVotes = []
var mostMissedVotes = []
var leastMissedVotes2 = []
var mostMissedVotes2 = []
var leastMissedVotesNames = []
var mostMissedVotesNames = []
var percentPartyMissed = []
var percentPartyMissed2 = []



for (var i = 0; i < members.length; i++) {
    if (members[i].party == "D") {
        democrats += 1
        percentPartyDemocrats.push(members[i].votes_with_party_pct)
        names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
            + ' ' + (members[i].last_name))
        party.push(members[i].party)
        democratsPercentParty += (members[i].total_votes-members[i].missed_votes)
        missedVotes.push(members[i].missed_votes)
        numberVotes.push(members[i].total_votes-members[i].missed_votes)
        

    }
    if (members[i].party == "R") {
        republicans += 1
        percentPartyRepublicans.push(members[i].votes_with_party_pct)
        names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
            + ' ' + (members[i].last_name))
        party.push(members[i].party)
        republicansPercentParty += (members[i].total_votes-members[i].missed_votes)
        missedVotes.push(members[i].missed_votes)
        numberVotes.push(members[i].total_votes-members[i].missed_votes)
    }
    if (members[i].party == "ID") {
        independents += 1
        percentPartyIndependents.push(members[i].votes_with_party_pct)
        names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
            + ' ' + (members[i].last_name))
        party.push(members[i].party)
        independentsPercentParty += (members[i].total_votes-members[i].missed_votes)
        missedVotes.push(members[i].missed_votes)
        numberVotes.push(members[i].total_votes-members[i].missed_votes)
    }

}

function average(numbers) {
    var result = 0

    if (numbers.length > 0) {
        for (var i = 0; i < numbers.length; i++)
            result += numbers[i]


        result = result / numbers.length
    }

    return result
}

function tenPercent(array) {
    var tenPercent = array.length * 0.1
    return tenPercent
}

function sortLeastVotes(array) {
    array.sort(function (a, b) {
        return a[0] - b[0];
    });
}

function sortMostVotes(array) {
    array.sort(function (a, b) {
        return b[0] - a[0];
    });
}

//create 3d Array with Votes with party and Names//
function percentageNames(votes, names, party) {
    var newArray = []
    for (var i = 0; i < votes.length; i++)
        newArray.push([votes[i], names[i],party[i]])


    return newArray
}


var percentageNames2 = percentageNames(numberVotes, names, party)
var percentageNames3 = percentageNames(missedVotes, names, party)


var tenPercent2 = tenPercent(names)


sortLeastVotes(percentageNames2)
leastVotes = percentageNames2


for (var i = 0; i < tenPercent2; i++) {
    leastVotesNumbers.push(leastVotes[i][0])
    leastVotesNames.push(leastVotes[i][1])

    if(leastVotes[i][2] =="D"){
    percentParty.push(leastVotes[i][0]*100/democratsPercentParty)

    }

    if(leastVotes[i][2] =="R"){
        
    percentParty.push(leastVotes[i][0]*100/republicansPercentParty)
    }

    if(leastVotes[i][2] =="ID"){
        
    percentParty.push(leastVotes[i][0]*100/independentsPercentParty)
    }
    
}




sortMostVotes(percentageNames2)
mostVotes = percentageNames2

for (var i = 0; i < tenPercent2; i++) {
    mostVotesNumbers.push(mostVotes[i][0])
    mostVotesNames.push(mostVotes[i][1])

    if(mostVotes[i][2] =="D"){
        percentParty2.push(mostVotes[i][0]*100/democratsPercentParty)
    
        }
    
        if(mostVotes[i][2] =="R"){
            
        percentParty2.push(mostVotes[i][0]*100/republicansPercentParty)
        }
    
        if(mostVotes[i][2] =="ID"){
            
        percentParty2.push(mostVotes[i][0]*100/independentsPercentParty)
        }
}

sortLeastVotes(percentageNames3)
leastMissedVotes = percentageNames3

for (var i = 0; i < tenPercent2; i++) {
    leastMissedVotesNames.push(leastMissedVotes[i][1])
    leastMissedVotes2.push(leastMissedVotes[i][0])

    if(mostVotes[i][2] =="D"){
        percentPartyMissed.push(leastMissedVotes[i][0]*100/democratsPercentParty)
    
        }
    
        if(mostVotes[i][2] =="R"){
            
        percentPartyMissed.push(leastMissedVotes[i][0]*100/republicansPercentParty)
        }
    
        if(mostVotes[i][2] =="ID"){
            
        percentPartyMissed.push(leastMissedVotes[i][0]*100/independentsPercentParty)
        }
}

sortMostVotes(percentageNames3)
mostMissedVotes = percentageNames3

for (var i = 0; i < tenPercent2; i++) {
    mostMissedVotesNames.push(mostMissedVotes[i][1])
    mostMissedVotes2.push(mostMissedVotes[i][0])

    if(mostVotes[i][2] =="D"){
        percentPartyMissed2.push(mostMissedVotes[i][0]*100/democratsPercentParty)
    
        }
    
        if(mostVotes[i][2] =="R"){
            
        percentPartyMissed2.push(mostMissedVotes[i][0]*100/republicansPercentParty)
        }
    
        if(mostVotes[i][2] =="ID"){
            
        percentPartyMissed2.push(mostMissedVotes[i][0]*100/independentsPercentParty)
        }
}

//Votes average every party

var averageVotesDemocrats = average(percentPartyDemocrats) 
var averageVotesRepublicans = average(percentPartyRepublicans)
var averageVotesIndependents = average(percentPartyIndependents) 

