
function makeTable(){
  var table = document.getElementById("senate-at-glance");
  var tbody = table.querySelector("tbody");
  var row = document.createElement("tr");
  for (i=0;i< party.length; i++){
  
      var nameParty = document.createElement("td");
      nameParty.innerText = party;
      var numberOfReps = document.createElement("td");
      numberOfReps.innerText =(group[party].length);
      var votesWithParty = document.createElement("td");
      votesWithParty.innerText = averages[party];
    
      
 }
 row.append(nameParty,numberOfReps, votesWithParty);
 tbody.append(row);
}
makeTable();