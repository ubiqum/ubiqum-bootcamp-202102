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
  
  // calculate render treshhold, set by the client to 10% from total representatives
  senateStatistics.render_threshold = Math.round(senateStatistics.total_number_of_representatives * 0.1)
  
  // sort in desceding order, representatives with highest "missed_votes_pct" are first
  tablesData["senate-data"].sort(function (x, y) { return y.missed_votes_pct - x.missed_votes_pct; });
    
}

/*
ATTENDANCE
calculation:
sort  all senators by ""missed_votes""
calculated 10% from total_number_of_representatives
html rendering:
then take this 10% amount of representatives from the the ordered list 
continue to add representatives which have same ""missed_votes_pct"" as the last person in the list

calculate values for rows in the table:
No. missed votes -> missed_votes
% missed  ->  missed_votes_pct

render in HTML



"LOYALTY
order all senators by ""votes_with_party_pct""
calculated 10% from total_number_of_representatives
then take this 10% amount of representatives from the the ordered list 
then add any representatives which have same ""votes_with_party_pct"" as the last person in the list
calculate values for rows in the table:
No. party votes -> total_votes * votes_with_party_pct / 100
% Party votes -> votes_with_party_pct"

*/