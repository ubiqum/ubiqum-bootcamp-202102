/**
 * Retrieves members from the senate api
 * 
 * @param {Function} callback The function to use when using this function
 */
 function retrieveSenateMembers(callback) {
    fetch("https://api.propublica.org/congress/v1/116/senate/members.json", {
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