//numbers per party
var members = data.results[0].members;
var group = members.reduce((r, a) => {
  r[a.party] = [...r[a.party] || [], a];
  return r;
 }, {});
 


statistics.numberOfRepublicans = group.R.length;
statistics.numberOfDemocrats= group.D.length;
statistics.numberOfIndependents = group.ID.length;

// republican votes compared to democrat votes
var allPartyVotes = [];
for (var i = 0; i < statistics.; i++) {
  allPartyVotes.push(group[i].votes_with_party_pct);
  }



// var totalRepublicanVotes = [];
//   for (var i = 0; i < stat; i++) {
//     totalRepublicanVotes.push(republicanMembers[i].votes_with_party_pct);
//   }
  
  
//   var averageRepVote = ((totalRepublicanVotes.reduce((a, b) => a + b, 0))/statistics.numberOfRepublicans);

//   var totalDemocratVotes = [];
//   for (var i = 0; i < democratMembers.length; i++) {
//     totalDemocratVotes.push(democratMembers[i].votes_with_party_pct);
//   }
//   var averageDemVote = ((totalDemocratVotes.reduce((a, b) => a + b, 0))/statistics.numberOfDemocrats);

//   var repComparedToDem = ((averageRepVote-averageDemVote)/averageDemVote)*100

//   statistics.democratVSRepublicanVotes = repComparedToDem.toFixed(2);

  //lowest 10% votes republicans
//   totalRepublicanVotes.sort();
//   r10 = (statistics.numberOfRepublicans/100)*10;
//   lowest10RMembers = [];
//   for (i=0; i< r10; i++){
// lowest10RMembers.push(republicanMembers[i])
//   }
//   statistics.lowestVotesWithRepublicans=lowest10RMembers;

//   //lowest 10% votes democrats
//   totalDemocratVotes.sort();
//   d10 = (statistics.numberOfDemocrats/100)*10;
//   lowest10DMembers = [];
//   for (i=0; i< d10; i++){
// lowest10DMembers.push(democratMembers[i])
//   }
//   statistics.lowestVotesWithDemocrats=lowest10DMembers;

//   //highest 10% votes republicans
//   totalRepublicanVotes.sort(function(a, b){return b-a}); 
//   highest10RMembers = [];
//   for (i=0; i< r10; i++){
// highest10RMembers.push(republicanMembers[i])
//   }
//   statistics.highVotesWithRepublicans=highest10RMembers;

//   //highest 10% votes republicans
//   totalDemocratVotes.sort(function(a, b){return b-a}); 
//   highest10DMembers = [];
//   for (i=0; i< d10; i++){
// highest10DMembers.push(democratMembers[i])
//   }
//   statistics.highVotesWithDemocrats=highest10DMembers;

//   //least votes missed democrats
//   var sortedDemocratMembers = democratMembers.sort((a, b) => (a.missed_votes > b.missed_votes) ? 1 : -1)
//   var lowestVotesMissedD=[];
//   for(var i = 0; i<d10 ; i++){
//   lowestVotesMissedD.push(sortedDemocratMembers[i]);
//   }

//   statistics.leastVotesMissedDemocrat =lowestVotesMissedD;

//    //least votes missed republican
//    var sortedRepublicanMembers = republicanMembers.sort((a, b) => (a.missed_votes > b.missed_votes) ? 1 : -1)
//    var lowestVotesMissedR=[];
//    for(var i = 0; i<r10 ; i++){
//    lowestVotesMissedR.push(sortedRepublicanMembers[i]);
//    }
 
//    statistics.leastVotesMissedRepublican =lowestVotesMissedR;

//     //most votes missed democrats
//     var sortedDemocratMembers = democratMembers.sort((a, b) => (a.missed_votes > b.missed_votes) ? -1 : 1)
//     var mostVotesMissedD=[];
//     for(var i = 0; i<d10 ; i++){
//     mostVotesMissedD.push(sortedDemocratMembers[i]);
//     }
  
//     statistics.mostVotesMissedDemocrat =mostVotesMissedD;

//     //most votes missed republicans
//     var sortedRepublicanMembers = republicanMembers.sort((a, b) => (a.missed_votes > b.missed_votes) ? -1 : 1)
//     var mostVotesMissedR=[];
//     for(var i = 0; i<r10 ; i++){
//     mostVotesMissedR.push(sortedRepublicanMembers[i]);
//     }
  
//     statistics.mostVotesMissedRepublican =mostVotesMissedR;