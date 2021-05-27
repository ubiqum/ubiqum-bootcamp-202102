// filter data based on the input filters
function filterMembers(membersData, partyFilterArray, stateFilterItem) {
  let filtredDataArray = [];

  if (stateFilterItem == "") {
    for (const party of partyFilterArray) {
      filtredDataArray = filtredDataArray.concat(
        membersData.filter((member) => member.party == party)
      );
    }
  } else {
    for (const party of partyFilterArray) {
      filtredDataArray = filtredDataArray.concat(
        membersData.filter(
          (member) => member.party == party && member.state == stateFilterItem
        )
      );
    }
  }

  return filtredDataArray;
}

function calculateStatistics() {
  const democractsSenate = filterMembers(tablesData["senate-data"], ["D"], "");
  const republicansSenate = filterMembers(tablesData["senate-data"], ["R"], "");
  const independentsSenate = filterMembers(
    tablesData["senate-data"],
    ["ID"],
    ""
  );

  senateStatistics.number_of_democracts = democractsSenate.length;
  senateStatistics.number_of_republicans = republicansSenate.length;
  senateStatistics.number_of_independents = independentsSenate.length;

  senateStatistics.total_number_of_representatives =
    senateStatistics.number_of_democracts +
    senateStatistics.number_of_republicans +
    senateStatistics.number_of_independents;

  senateStatistics.democracts_voted_with_party_average_percentage =
    democractsSenate.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.votes_with_party_pct;
    }, 0) / senateStatistics.number_of_democracts;

  senateStatistics.republicans_voted_with_party_average_percentage =
    republicansSenate.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.votes_with_party_pct;
    }, 0) / senateStatistics.number_of_republicans;

  senateStatistics.independents_voted_with_party_average_percentage =
    independentsSenate.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.votes_with_party_pct;
    }, 0) / senateStatistics.number_of_independents;

  senateStatistics.total_voted_with_party_average_percentage =
    (senateStatistics.democracts_voted_with_party_average_percentage +
      senateStatistics.republicans_voted_with_party_average_percentage +
      senateStatistics.independents_voted_with_party_average_percentage) /
    3;
}
