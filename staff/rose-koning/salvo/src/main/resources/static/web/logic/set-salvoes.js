function setSalvoes(turnType, gamePlayerId, salvoes, callback){
    if(turnType === "even"&& salvoes.turnTracker% 2 == 0|| turnType ==="odd" && salvoes.turnTracker% 2 != 0){
    $.ajax({
        type: "POST",
        url: "/api/games/players/" + gamePlayerId + "/salvoes",
        data: JSON.stringify(salvoes),
        contentType: "application/json"
    })
    .done(function(){
        callback()
    })
    .fail(function(error){
        callback(error)
    })
}
else{
    throw Error("Wait until your turn");
}
}