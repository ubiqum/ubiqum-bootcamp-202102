/**
 * Retrieves states for legislators
 * 
 * @param {Function} callback The function to use when using this function
 */
 function retrieveJurisdictions(callback) {
    
    fetch("https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52&apikey=2b1b7771-9478-46a4-82a7-107ca9a989aa")
    .then(response => {
        if (response.ok)
            return response.json()

        throw new Error("connection error")
    })
    .then(data => {
        var jurisdictions = data.results;

        callback(null, jurisdictions);
    })
    .catch(error => {
        callback(error)
    })
}