function makeTableAtGlance(){
    var table = document.getElementById("at-glance");
    var tbody = table.querySelector("tbody");
   
    for (var party in group) {
        var row = document.createElement("tr");
        var nameParty = document.createElement("td");
        nameParty.innerText = party;
        var numberOfReps = document.createElement("td");
        numberOfReps.innerText =(group[party].length);
        var votesWithParty = document.createElement("td");
        votesWithParty.innerText = averages[party];
      
        row.append(nameParty,numberOfReps, votesWithParty);
   tbody.append(row); 
   }
  }
function makeTableLeastLoyal(){
    var table = document.getElementById("least-loyal");
    var tbody = table.querySelector("tbody");
    for(var i =0 ; i<leastLoyal.length ; i++){
      var row = document.createElement("tr");
      var name = document.createElement("td");
        name.innerText = leastLoyal[i].first_name + " "+ leastLoyal[i].last_name;
      var partyVotes =document.createElement("td");
      partyVotes.innerText = leastLoyal[i].total_votes;
      var percentageVotesWithParty = document.createElement("td");
      percentageVotesWithParty.innerText = leastLoyal[i].votes_with_party_pct;
      row.append(name,partyVotes,percentageVotesWithParty);
      tbody.append(row);
    } 
  }
  function makeTableMostLoyal(){
    var table = document.getElementById("most-loyal");
    var tbody = table.querySelector("tbody");
    for(var i =0 ; i<mostLoyal.length ; i++){
      var row = document.createElement("tr");
      var name = document.createElement("td");
        name.innerText = mostLoyal[i].first_name + " "+ mostLoyal[i].last_name;
      var partyVotes =document.createElement("td");
      partyVotes.innerText = mostLoyal[i].total_votes;
      var percentageVotesWithParty = document.createElement("td");
      percentageVotesWithParty.innerText = mostLoyal[i].votes_with_party_pct;
      row.append(name,partyVotes,percentageVotesWithParty);
      tbody.append(row);
    } 
  }
  makeTableMostLoyal();
  makeTableLeastLoyal();
  makeTableAtGlance();