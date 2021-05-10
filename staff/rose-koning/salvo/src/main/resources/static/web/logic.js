function getCells(){
    var rows = ["","A","B","C","D","E","F","G","H","I","J"];
    var columns = ["","1","2","3","4","5","6","7","8","9","10"];
    var cells=[];
    for(i=0; i<columns.length ; i++){
        
        var column= (columns[i])
        for(j=0; j<rows.length; j++){
            var cell = rows[j]+column
            cells.push(cell);
        }
       
    }
    return cells;
}

function getGames(callback) {
    fetch("/api/games")
        .then(function (response) {
            return response.json();
        })
        .then(function (games) {
            callback(games);
        })
}

function getGameView(gameId, callback){
    fetch("/api/game_view/"+gameId)
    .then(function(response){
      return response.json();
    })
    .then(function(game){
      callback(game)
    })
  }

  function setShips(ships){
      for(var i = 0; i< ships.length; i++){
        var ship = ships[i].location;
        for(var j = 0; j< ship.length; j++){
            var cell = (ship[j]).toUpperCase();
            document.getElementsById("cellMyShips").className ="cell cell__active";
        }
      }
  
  }

  function setSalvoes(salvoes){
    for(var i = 0; i< salvoes.length; i++){
      var salvo = salvoes[i].location;
      for(var j = 0; j< salvo.length; j++){
          var cell = (salvo[j]).toUpperCase();
          document.getElementsById("cellMySalvoes").className ="cell cell__hit";
      }
    }

}
