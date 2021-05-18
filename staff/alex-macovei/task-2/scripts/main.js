var statesR = retrieveStates()

renderStatesSelector(statesR)

renderCongressMembers(data.results[0].members)

states.onchange=renderStates;

