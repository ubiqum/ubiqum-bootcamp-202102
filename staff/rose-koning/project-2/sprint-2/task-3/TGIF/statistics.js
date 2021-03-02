//numbers per party
var members = data.results[0].members;
var group = members.reduce((r, a) => {
  r[a.party] = [...r[a.party] || [], a];
  return r;
 }, {});
 
statistics.numberOfRepublicans = group.R.length;
statistics.numberOfDemocrats= group.D.length;

// republican votes compared to democrat votes
var votes = {R:[],D:[],ID:[]};
var averages ={};
for (var party in group) {
  var senators = group[party];
  for (var senator of senators) {
    votes[party].push(senator.votes_with_party_pct);
    
    averages[party]= ((votes[party].reduce((a, b) => a + b, 0))/votes[party].length).toFixed(2)
  
}
var repComparedtoDem = ((averages.R-averages.D)/averages.D)*100;
statistics.democratVSRepublicanVotes= repComparedtoDem;
}

  //lowest 10% votes
  var lowestVotes=[]
    var tenPercent = Math.ceil((members.length/100)*10);
    var sortedMembers = members.sort(function (a, b) {
      return a.missed_votes_pct > b.missed_votes_pct? 1 : -1;});
    for (i=0; i< tenPercent; i++){
      lowestVotes.push(sortedMembers[i])}
  
        
  statistics.lowestVotes=lowestVotes;
 

   //highest 10% votes
   var highestVotes=[]
   var tenPercent = Math.ceil((members.length/100)*10);
   var sortedMembers = members.sort(function (a, b) {
     return a.missed_votes_pct > b.missed_votes_pct? -1 : 1;});
   for (i=0; i< tenPercent; i++){
     highestVotes.push(sortedMembers[i])}
 
       
 statistics.highestVotes=highestVotes;

//10% least loyal
var leastLoyal=[]
   var tenPercent = Math.ceil((members.length/100)*10);
   var sortedMembers = members.sort(function (a, b) {
     return a.votes_with_party_pct > b.votes_with_party_pct? 1 : -1;});
   for (i=0; i< tenPercent; i++){
     leastLoyal.push(sortedMembers[i])}
 
       
 statistics.leastLoyal=leastLoyal;

//10% most loyal
var mostLoyal=[]
   var tenPercent = Math.ceil((members.length/100)*10);
   var sortedMembers = members.sort(function (a, b) {
     return a.votes_with_party_pct > b.votes_with_party_pct? -1 : 1;});
   for (i=0; i< tenPercent; i++){
     mostLoyal.push(sortedMembers[i])}
 
       
 statistics.mostLoyal=mostLoyal;