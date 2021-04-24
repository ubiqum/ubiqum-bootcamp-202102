// filter data based on the input filters
function filterMembers(data, partyCheckboxValues, StateDropdownValue) {
  let filtredData = [];

  if (
    JSON.stringify(partyCheckboxValues) == JSON.stringify(["R", "D", "ID"]) &&
    StateDropdownValue == ""
  ) {
    filtredData = data;
  } else if (StateDropdownValue == "") {
    for (const party of partyCheckboxValues) {
      filtredData = filtredData.concat(
        data.filter((member) => member.party == party)
      );
    }
  } else {
    for (const party of partyCheckboxValues) {
      filtredData = filtredData.concat(
        data.filter(
          (member) =>
            member.party == party && member.state == StateDropdownValue
        )
      );
    }
  }

  return filtredData;
}

// calculate statistics required for the tables
function calculateStatistics(input, output) {
  // create array with members, then loop through

  // get filtred data by party affiliation
  const democracts = filterMembers(input, ["D"], "");
  const republicans = filterMembers(input, ["R"], "");
  const independents = filterMembers(input, ["ID"], "");

  // calculate amount of members per party affiliation
  output.number_of_democracts = democracts.length;
  output.number_of_republicans = republicans.length;
  output.number_of_independents = independents.length;

  output.number_of_representatives_total =
    output.number_of_democracts +
    output.number_of_republicans +
    output.number_of_independents;

  // can not devide by zero, if number of representative 0 then 0
  // calculate votes with party %
  if (output.number_of_democracts === 0) {
    output.voted_with_party_average_percentage_democracts = 0;
  } else {
    output.voted_with_party_average_percentage_democracts =
      democracts.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.votes_with_party_pct;
      }, 0) / output.number_of_democracts;
  }

  if (output.number_of_republicans === 0) {
    output.voted_with_party_average_percentage_republicans = 0;
  } else {
    output.voted_with_party_average_percentage_republicans =
    republicans.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.votes_with_party_pct;
      }, 0) / output.number_of_republicans;
  }

  if (output.number_of_independents === 0) {
    output.voted_with_party_average_percentage_independents = 0;
  } else {
    output.voted_with_party_average_percentage_independents =
    independents.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.votes_with_party_pct;
      }, 0) / output.number_of_independents;
  }

  output.voted_with_party_average_percentage_total =
    (output.voted_with_party_average_percentage_democracts +
      output.voted_with_party_average_percentage_republicans +
      output.voted_with_party_average_percentage_independents) /
    3;

  // calculate render treshhold, set by the client to 10% from total representatives
  output.render_threshold = Math.round(
    output.number_of_representatives_total * 0.1
  );
}

// sort in desceding order, representatives with highest "missed_votes_pct" are first

// sort in asceding order, lowest to highest
function sortAsc(data, sortBy) {
  data.sort(function (x, y) {
    return x[sortBy] - y[sortBy];
  });
  return data;
}

// sort in descending order, from highest to lowest
function sortDsc(data, sortBy) {
  data.sort(function (x, y) {
    return y[sortBy] - x[sortBy];
  });
  return data;
}

/*
ATTENDANCE
calculation:
sort  all senators by ""missed_votes""
calculated 10% from number_of_representatives_total
html rendering:
then take this 10% amount of representatives from the the ordered list 
continue to add representatives which have same ""missed_votes_pct"" as the last person in the list

calculate values for rows in the table:
No. missed votes -> missed_votes
% missed  ->  missed_votes_pct

render in HTML



"LOYALTY
order all senators by ""votes_with_party_pct""
calculated 10% from number_of_representatives_total
then take this 10% amount of representatives from the the ordered list 
then add any representatives which have same ""votes_with_party_pct"" as the last person in the list
calculate values for rows in the table:
No. party votes -> total_votes * votes_with_party_pct / 100
% Party votes -> votes_with_party_pct"

*/
