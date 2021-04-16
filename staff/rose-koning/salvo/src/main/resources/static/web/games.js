fetch("/api/games")
.then(function (response) {
    return response.json();
  })
  .then(function (games) {
var gameList = document.getElementById("games");

for (var game in games){
var listItem = document.createElement("li");
listItem.innerText=games[game].created;
var subList = document.createElement("ol")

for(var player in games[game].gamePlayers){
    var subListItem =document.createElement("li");
    subListItem.innerText=games[game].gamePlayers[player].userName;
    listItem.append(subList);
    subList.append(subListItem);
    }

gameList.append(listItem);
}
  })