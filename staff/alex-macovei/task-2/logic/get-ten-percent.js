/**
 * takes the first 10% of the given members
 * 
 * @param {Array} members the members from which to take 10% of
 * 
 * @returns {Array} Returns the first 10% of the members
 */
 function getTenPercent(members) {
    var tenPercent = members.length / 10;
    var returnMembers = [];

    for (var i = 0; i < tenPercent; i++) {
        returnMembers[i] = members[i];
    }

    return returnMembers;
}