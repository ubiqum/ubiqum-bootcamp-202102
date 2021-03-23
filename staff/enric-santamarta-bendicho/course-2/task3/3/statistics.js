var members = data.results[0].members;
var democrats = 0
var republicans = 0
var independents = 0
var averageVoteswithPartyDemocrats = []
var averageVoteswithPartyRepublicans = []
var averageVoteswithPartyIndependents = []


for (var i=0;i<members.length;i++){
    if (members[i].party == "D"){
        democrats += 1
        averageVoteswithPartyDemocrats.push(members[i].votes_with_party_pct)

    }
    if (members[i].party == "R"){
        republicans += 1
        averageVoteswithPartyRepublicans.push(members[i].votes_with_party_pct)
    }
    if (members[i].party == "ID"){
        independents += 1
        averageVoteswithPartyIndependents.push(members[i].votes_with_party_pct)
    }

}

function average(array){
    var x = 0
        for (var i=0;i<array.length;i++){
            x += array[i]
        }
        if (x == []) {
            x = 0
        }
        else{
        x = (x/i)}
    
    return x 
    }
 
averageVoteswithPartyDemocrats = average(averageVoteswithPartyDemocrats) + '%'
averageVoteswithPartyRepublicans= average(averageVoteswithPartyRepublicans) + '%'
averageVoteswithPartyIndependents = average(averageVoteswithPartyIndependents) + '%'

