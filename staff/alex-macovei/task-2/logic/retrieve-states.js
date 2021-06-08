/**
 * Retrieves the states and filters them
 * 
 * @returns {Array} The filtered states
 */
 function retrieveStates(members) {
    var states = [];

    for (var i = 0; i < members.length; i++) {
        if (!states.includes(members[i].state)) {
            states.push(members[i].state);
        }
    }
    return states.sort();
}