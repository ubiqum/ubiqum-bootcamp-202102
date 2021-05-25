retrieveJsonData(function(data) {
    console.log(data)
    var data = data;
    renderStatesSelector(retrieveStates());

renderCongressMembers(retrieveAllMembers());

var states = document.getElementById("states");

states.onchange = renderStates;
})

