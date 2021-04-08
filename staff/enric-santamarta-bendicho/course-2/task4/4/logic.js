function retrieveMembers(callback){
    
    fetch("https://api.propublica.org/congress/v1/113/senate/members.json",
    {
        headers: {
            "X-API-Key": "I0REsGy5W1Niu7TP6VKCAF8dVD68NILvYaucpFhY"
        }
    }
)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        callback(data.results[0].members);

    })

}

