
// function makeTableSenateAtGlance(){
//   var table = document.getElementById("at-glance");
//   var tbody = table.querySelector("tbody");
 
//   for (var party in group) {
//       var row = document.createElement("tr");
//       var nameParty = document.createElement("td");
//       nameParty.innerText = party;
//       var numberOfReps = document.createElement("td");
//       numberOfReps.innerText =(group[party].length);
//       var votesWithParty = document.createElement("td");
//       votesWithParty.innerText = averages[party];
    
//       row.append(nameParty,numberOfReps, votesWithParty);
//  tbody.append(row); 
//  }
// }

// function makeTableLeastEngaged(){
//   var table = document.getElementById("least-engaged");
//   var tbody = table.querySelector("tbody");
//   for (var member of lowestVotes[party]) {
//     var row = document.createElement("tr");
//     var name = document.createElement("td");
//       name.innerText = member.first_name + " "+ member.last_name;
//     var missedVotes =document.createElement("td");
//     missedVotes.innerText = member.missed_votes;
//     var percentageMissedVotes = document.createElement("td");
//     percentageMissedVotes.innerText = member.missed_votes_pct;
//     row.append(name,missedVotes,percentageMissedVotes);
//     tbody.append(row);
//   } 
// }
// makeTableSenateAtGlance();
// makeTableLeastEngaged();