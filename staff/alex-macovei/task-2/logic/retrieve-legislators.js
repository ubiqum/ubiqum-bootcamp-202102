/**
 * Retrieves legislators from specified jurisdiction
 * 
 * @param {String} jurisdiction The jurisdiction to filter the legislators from
 * @param {Function} callback The function to use when using this function
 */
function retrieveLegislators(jurisdiction, callback) {
    var url = "jurisdiction=" + jurisdiction
    fetch("https://v3.openstates.org/people?" + url + "&page=1&per_page=50&apikey=2b1b7771-9478-46a4-82a7-107ca9a989aa")
        .then(response => {
            if (response.ok)
                return response.json()

            throw new Error("connection error")
        })
        .then(data => {
            var legislators = data.results;

            callback(null, legislators);
        })
        .catch(error => {
            callback(error)
        })
}