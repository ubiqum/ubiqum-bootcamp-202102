// Utility code for State drop down which is common for all the pages across the website.

var state_names = [];   
var json_obj2 = {states: []};

for (var j = 0; j < states.results.length; j++)
{
    state_names.push(states.results[j].name);
    json_obj2.states.push({
        "State Name" : state_names[j]
    })
}
console.log("state_names are: ",  json_obj2.states);
var stateList_obj = {states: json_obj2.states};

// Binding state drop down for all the other pages except for legislator.html
$(document).ready(function(){
    var template1 = $('#Legislator-state-template').html();
    var statelist = Mustache.render(template1, stateList_obj);          //call Mustache's render() function to create the HTML
    $('#States-drp>ul').append(statelist);
});