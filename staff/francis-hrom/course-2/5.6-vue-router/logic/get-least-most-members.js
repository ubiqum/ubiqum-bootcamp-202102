async function getLeastMostMembers(memberType, tableOrder, sortElement) {
  const filtredMembers = [];

  let members = await retrieveMembers(memberType, null, null);
  if (tableOrder === "sortDescending") {
    members = sortDescending(members, sortElement);
  }
  if (tableOrder === "sortAscending") {
    members = sortAscending(members, sortElement);
  }

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
// sort in asceding order, lowest to highest
function sortAscending(members, sortElement) {
  members.sort(function (x, y) {
    return x[sortElement] - y[sortElement];
  });
  return members;
}

// sort in descending order, from highest to lowest
function sortDescending(members, sortElement) {
  members.sort(function (x, y) {
    return y[sortElement] - x[sortElement];
  });
  return members;
}
