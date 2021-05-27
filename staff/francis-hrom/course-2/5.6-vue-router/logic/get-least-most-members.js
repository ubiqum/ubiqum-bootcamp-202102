/**
 * Get array of filtred members for least/most tables
 * @param {string} memberType The type of member (House or Senate)
 * @param {function} sortFx Function for sorting members list (asceding or descending order)
 * @param {string} sortElement Element according to which the sorting will be done
 * @returns {array} Array with filtres members.
 */
async function getLeastMostMembers(memberType, sortFx, sortElement) {
  const filtredMembers = [];
  let members = await retrieveMembers(memberType, null, null);
  members = sortFx(members, sortElement);

  // amount of members which should be returned; 0.1 = 10%
  const membersAmount = Math.round(
    (await getAtGlanceStats(memberType)).number_of_total * 0.1
  );

  for (const member of members.slice(0, membersAmount)) {
    filtredMembers.push(member);
  }

  // in case the last member has the same value of sort element as the previous memeber, she will be added to array with results
  let lastMember = members[membersAmount - 1];
  for (const member of members.slice(membersAmount)) {
    if (member[sortElement] === lastMember[sortElement]) {
      filtredMembers.push(member);
      lastMember = member;
    } else {
      break;
    }
  }

  return filtredMembers;
}

// helper functions
/**
 * Sort members in asceding order (lowest to highest) based on the sortElement value
 * @param {array} members 
 * @param {string} sortElement Element according to which the sorting will be done
 * @returns {array} Array with sorted members.
 */
function sortAscending(members, sortElement) {
  members.sort(function (x, y) {
    return x[sortElement] - y[sortElement];
  });
  return members;
}

/**
 * Sort members in descending order (lowest to highest) based on the sortElement value
 * @param {array} members 
 * @param {string} sortElement Element according to which the sorting will be done
 * @returns {array} Array with sorted members.
 */
// sort in descending order, from highest to lowest
function sortDescending(members, sortElement) {
  members.sort(function (x, y) {
    return y[sortElement] - x[sortElement];
  });
  return members;
}
