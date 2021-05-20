renderStatesSelector(retrieveStates());

renderCongressMembers(retrieveAllMembers());

var states = document.getElementById("states");

states.onchange = renderStates;