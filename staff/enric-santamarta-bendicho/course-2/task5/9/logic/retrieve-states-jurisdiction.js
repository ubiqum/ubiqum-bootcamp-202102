//RetrieveStates Jurisdiction
function retrieveStatesJurisdiction(callback) {

    cachedFetch('https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52', {
        headers: {
            'x-api-key': '5b80bb17-a10b-49c8-9cd1-1edfd4c5db0a'
        }
    })
        .then(r => r.json())

        .then(function (data) {
            callback(data.results)
        })
}

