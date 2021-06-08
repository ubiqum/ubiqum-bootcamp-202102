/**
 * Retrieves members from the house api
 * 
 * @param {Function} callback The function to use when using this function
 */
 function retrieveHouseMembers(callback) {
    fetch("https://api.propublica.org/congress/v1/116/house/members.json", {
        headers: {
            "X-API-Key": "8bBfJYRI5ZDmwRP7uDnJwXbWUmxFbZZ4n6pdepkY"
        }
    })
        .then(response => response.json())
        .then(function (data) {
            var members = data.results[0].members;
            callback(members);
        })
}