// creating url in the format legislators.html?state=il
const urlParams = new URLSearchParams(window.location.search);

// retrieve data for a specific state by hitting the states drop down and storing it
const state = urlParams.get('state');

var names = []; var parties = []; var chamberTitles = [];
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
        names.push(people[i].Name);
        parties.push(people[i].Party);
        //chamberTitles.push(data.results[i].current_role.org_classification);
        chamberTitles.push(getChamberTitle(people, i));   //Calling the getChamberTitle()
        legislators.push({
            "Name": names[i],
            "Party": parties[i],
            "chamberTitle": chamberTitles[i]            //Change the template so that instead of {{chamber}} it says {{chamberTitle}}.
        })
    }
    //var legislator_obj = {legislator: json_obj1.legislators};
    var template = $('#legislator-template').html();
    var stateinfo = Mustache.render(template, { legislators });
    $('#State-legislators>tbody').append(stateinfo);
    $('#State-heading').append(state);
})