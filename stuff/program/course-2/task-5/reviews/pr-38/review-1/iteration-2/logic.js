function retrievePeopleFromJurisdiction(state, callback) {
    // Openstates API URL: https://v3.openstates.org/people?jurisdiction=state&include=other_names&include=other_identifiers&include=links&include=sources&include=offices&page=1&per_page=10&apikey=ca4e5c9d-cfbb-4a2d-8090-ae2af93e85bb

    if (!localStorage.getItem(state)) {
        // retrieving data from openstates since data not present in the cache/local storage.

        fetch('https://v3.openstates.org/people?jurisdiction=' + state + '&include=other_names&include=other_identifiers&include=links&include=sources&include=offices',
            {
                method: "GET", headers: { "x-api-key": "ca4e5c9d-cfbb-4a2d-8090-ae2af93e85bb", }
            })
            .then(response => response.json())
            .then(function (data) {
                var p1 = data.results;
                var people = [];
                for (i = 0; i < p1.length; i++) {
                    console.log(p1[i].name, p1[i].party, p1[i].current_role.org_classification);
                    people.push({
                        "Name": (p1[i].name),
                        "Party": (p1[i].party),
                        "orgClassification": (p1[i].current_role.org_classification),
                        "Title": (p1[i].current_role.title)
                    })
                }
                //console.log("This is working", data);
                //console.log("this is people: ", people);
                // caching the retrieved data to the local storage for future retrieval requests.
                localStorage.setItem(state, JSON.stringify(people));
                //console.log(localStorage.getItem(state));

                callback(people);
            })
    }
    else {
        // checking for the data if it already present in the cache/local storage.
        var people = JSON.parse(localStorage.getItem(state));

        callback(people);
    }
}