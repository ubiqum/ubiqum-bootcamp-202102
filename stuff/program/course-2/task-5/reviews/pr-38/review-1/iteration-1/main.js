// creating url in the format legislators.html?state=il
const urlParams = new URLSearchParams(window.location.search);

// retrieve data for a specific state by hitting the states drop down and storing it
const state = urlParams.get('state');

var a1 = []; var a2 = []; var a3 = [];
//var json_obj1 = {legislators: []};
var legislators = [];

// Define a getChamberTitle() function that takes upper or lower and returns the title of a person in that chamber
function getChamberTitle(people, i) {
    var title;
    if (people[i].orgClassification == "lower")
        title = people[i].Title;
    if (people[i].orgClassification == "upper")
        title = people[i].Title;
    return title;
}

retrievePeopleFromJurisdiction(state, function (people) {
    for (var i = 0; i < people.length; i++)    // change this to people
    {
        a1.push(people[i].Name);
        a2.push(people[i].Party);
        //a3.push(data.results[i].current_role.org_classification);
        a3.push(getChamberTitle(people, i));   //Calling the getChamberTitle()
        legislators.push({
            "Name": a1[i],
            "Party": a2[i],
            "chamberTitle": a3[i]            //Change the template so that instead of {{chamber}} it says {{chamberTitle}}.
        })
    }
    //var legislator_obj = {legislator: json_obj1.legislators};
    var template = $('#legislator-template').html();
    var stateinfo = Mustache.render(template, { legislators });
    $('#State-legislators>tbody').append(stateinfo);
    $('#State-heading').append(state);
})

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

                /* for (var i = 0; i < people.length; i++)    // change this to people
                {
                    a1.push(people[i].Name);
                    a2.push(people[i].Party);
                    //a3.push(data.results[i].current_role.org_classification);
                    a3.push(getChamberTitle(people, i));   //Calling the getChamberTitle()
                    legislators.push({
                        "Name": a1[i],
                        "Party": a2[i],
                        "chamberTitle": a3[i]            //Change the template so that instead of {{chamber}} it says {{chamberTitle}}.
                    })
                }
                //var legislator_obj = {legislator: json_obj1.legislators};
                var template = $('#legislator-template').html();
                var stateinfo = Mustache.render(template, { legislators });
                $('#State-legislators>tbody').append(stateinfo);
                $('#State-heading').append(state); */
            })
    }
    else {
        // checking for the data if it already present in the cache/local storage.
        var people = JSON.parse(localStorage.getItem(state));

        callback(people);

        /* for (var i = 0; i < people.length; i++) {
            a1.push(people[i].Name);
            a2.push(people[i].Party);
            //a3.push(data.results[i].current_role.org_classification);
            a3.push(getChamberTitle(people, i));           //Calling the getChamberTitle()
            legislators.push({
                "Name": a1[i],
                "Party": a2[i],
                "chamberTitle": a3[i]                    //Change the template so that instead of {{chamber}} it says {{chamberTitle}}.
            })
        }
        //var legislator_obj = {legislator: json_obj1.legislators};
        var template = $('#legislator-template').html();
        var stateinfo = Mustache.render(template, { legislators });
        $('#State-legislators>tbody').append(stateinfo);
        $('#State-heading').append(state); */
    }
}