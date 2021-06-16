function setSalvoes(gamePlayerId, salvoes, callback){
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