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
var votes = {R:[],D:[],ID:[]};
var averages ={};
for (var party in group) {
  var senators = group[party];
  for (var senator of senators) {
    votes[party].push(senator.votes_with_party_pct);
    
    averages[party]= ((votes[party].reduce((a, b) => a + b, 0))/votes[party].length).toFixed(2)
  
}
var repComparedtoDem = (((averages.R-averages.D)/averages.D)*100).toFixed(2)
;
statistics.democratVSRepublicanVotes= repComparedtoDem;
}

  //lowest 10% votes
  var lowestVotes={R:[],D:[],ID:[]};
  var senatorsOrdered=[];
  for (var party in group) {
    var senators = group[party];
    var tenPercent = Math.ceil((senators.length/100)*10);
    senatorsOrdered.push(senators.sort((a, b) => {return a.votes_with_party_pct - b.votes_with_party_pct;}));
        for (i=0; i< tenPercent; i++){
          lowestVotes[party].push(senators[i])}
        }
  
  statistics.lowestVotesWithRepublicans=lowestVotes.R;
  statistics.lowestVotesWithDemocrats=lowestVotes.D;

   //highest 10% votes
   var highestVotes={R:[],D:[],ID:[]};
   var senatorsOrdered=[];
   for (var party in group) {
     var senators = group[party];
     var tenPercent = Math.ceil((senators.length/100)*10);
     senatorsOrdered.push(senators.sort((a, b) => {return b.votes_with_party_pct - a.votes_with_party_pct;}));
         for (i=0; i< tenPercent; i++){
           highestVotes[party].push(senators[i])}
         }
   
   statistics.highestVotesWithRepublicans=highestVotes.R;
   statistics.highestVotesWithDemocrats=highestVotes.D;

//10% least missed votes
var leastVotes={R:[],D:[],ID:[]};
var senatorsOrdered=[];
for (var party in group) {
  var senators = group[party];
  var tenPercent = Math.ceil((senators.length/100)*10);
  senatorsOrdered.push(senators.sort((a, b) => {return a.missed_votes_pct - b.missed_votes_pct;}));
      for (i=0; i< tenPercent; i++){
        leastVotes[party].push(senators[i])}
      }

statistics.leastVotesMissedRepublican=leastVotes.R;
statistics.leastVotesMissedDemocrat=leastVotes.D;

//10% most missed votes
var mostVotes={R:[],D:[],ID:[]};
var senatorsOrdered=[];
for (var party in group) {
  var senators = group[party];
  var tenPercent = Math.ceil((senators.length/100)*10);
  senatorsOrdered.push(senators.sort((a, b) => {return b.missed_votes_pct - a.missed_votes_pct;}));
      for (i=0; i< tenPercent; i++){
        mostVotes[party].push(senators[i])}
      }

statistics.mostVotesMissedRepublican=mostVotes.R;
statistics.mostVotesMissedDemocrat=mostVotes.D;