// sources of data
const tablesData = {
  "senate-data": senateData.results[0].members,
  "house-data": houseData.results[0].members,
};

// detect if the visible tables are senate or house
const visibleTables = [];
if (document.getElementById("senate-data")) {
  visibleTables.push({
    id: "senate-data",
    data: tablesData["senate-data"],
  });
} else if (document.getElementById("house-data")) {
  visibleTables.push({
    id: "house-data",
    data: tablesData["house-data"],
  });
}

// render initial tables on a web page
function renderInitialTables() {
  for (const table of visibleTables) {
    renderMembersTable(table.data, table.id);
  }
}

function updateTable() {
  // get array of values of selected checkboxes
  const checkboxFilterValuesArray = [
    ...document.querySelectorAll("input:checked"),
  ].map((e) => e.value);

  // get value of selected state in dropdown
  const selectedStateInDropdown = document.getElementById("state-filter").value;

  // get filtered data based on the values in checkboxes and dropdown
  for (const table of visibleTables) {
    const filtredData = filterMembers(
      table.data,
      checkboxFilterValuesArray,
      selectedStateInDropdown
    );
    renderMembersTable(filtredData, table.id);
  }
}

// detects existance of checkboxes and add event listeners to checkboxes
function activateCheckboxes() {
  if (document.getElementById("party-filter")) {
    const checkboxes = document
      .getElementById("party-filter")
      .getElementsByTagName("input");

    for (const checkbox of checkboxes) {
      if (checkbox.type === "checkbox") {
        checkbox.onchange = updateTable;
      }
    }
  }
}

// detects existance of dropdown and add items to dropdown
function activateDropdown() {
  if (document.getElementById("state-filter")) {
    // create dropdown menu with the list of states
    let dropdownStatesOptions = '<option value="">*ALL*</option>';

    for (const state of statesList) {
      state.id;
      dropdownStatesOptions +=
        '<option value="' + state + '">' + state + "</option>";

      document.getElementById("state-filter").innerHTML = dropdownStatesOptions;
    }

    // add event listener to dropdown
    document.getElementById("state-filter").onchange = updateTable;
  }
}

// renders table based on the input data
function renderMembersTable(membersData, renderElementID) {
  let membersTable =
    "<table>" +
    "<thead>" +
    "<tr>" +
    "<th>Name</th>" +
    "<th>Party</th>" +
    "<th>State</th>" +
    "<th>Years in Office</th>" +
    "<th>Votes with party</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>";

  for (const member of membersData) {
    membersTable +=
      "<tr>" +
      "<td>" +
      '<a href="' +
      member.url +
      '">' +
      member.first_name +
      " " +
      (member.middle_name || "") +
      member.last_name +
      "</a>" +
      "</td>" +
      "<td>" +
      member.party +
      "</td>" +
      "<td>" +
      member.state +
      "</th>" +
      "<td>" +
      member.seniority +
      "</th>" +
      "<td>" +
      member.votes_with_party_pct +
      "%" +
      "</th>" +
      "</tr>";
  }

  membersTable += "</tbody> " + " </table>";

  document.getElementById(renderElementID).innerHTML = membersTable;
}

// if relevant page, render table with ID "senate-at-glance-table"
function renderSenateAtGlanceTable() {
  if (document.getElementById("senate-at-glance-table")) {
    const table =
      "<table>" +
      "<thead>" +
      "<tr>" +
      "<th>Party</th>" +
      "<th>No. of Reps</th>" +
      "<th>% Voted w/ Party</th>" +
      "</tr>" +
      "<tr>" +
      "</thead>" +
      "<tbody>" +
      "<td>Democrats</td>" +
      "<td>" +
      senateStatistics.number_of_democracts +
      "</td>" +
      "<td>" +
      senateStatistics.democracts_voted_with_party_average_percentage.toFixed(
        2
      ) +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Republicans</td>" +
      "<td>" +
      senateStatistics.number_of_republicans +
      "</td>" +
      "<td>" +
      senateStatistics.republicans_voted_with_party_average_percentage.toFixed(
        2
      ) +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Independents</td>" +
      "<td>" +
      senateStatistics.number_of_independents +
      "</td>" +
      "<td>" +
      senateStatistics.independents_voted_with_party_average_percentage.toFixed(
        2
      ) +
      "</td>" +
      "</tr>" +
      "<td>Total</td>" +
      "<td>" +
      senateStatistics.total_number_of_representatives +
      "</td>" +
      "<td>" +
      senateStatistics.total_voted_with_party_average_percentage.toFixed(2) +
      "</td>" +
      "</tr>" +
      "</tbody>" +
      "</table>";

    document.getElementById("senate-at-glance-table").innerHTML = table;
  }
}

// if relevant page, render table with ID "senate-least-engaged-table"
function renderEngagedTables() {
  if (document.getElementById("senate-least-engaged-table")) {
    // sort in desceding order, representatives with highest "missed_votes_pct" are first
    const persons = tablesData["senate-data"].sort(function (x, y) {
      return y.missed_votes_pct - x.missed_votes_pct;
    });

    let table =
      "<table>" +
      "<thead>" +
      "<tr>" +
      "<th>Name</th>" +
      "<th>No. of Missed Votes</th>" +
      "<th>% Missed</th>" +
      "</tr>" +
      "<tr>" +
      "</thead>" +
      "<tbody>";

    // add to table all representatives up the the amount defined in the render_threshold
    for (const person of persons.slice(0, senateStatistics.render_threshold)) {
      table +=
        "<tr>" +
        "<td>" +
        '<a href="' +
        person.url +
        '">' +
        person.first_name +
        " " +
        (person.middle_name || "") +
        person.last_name +
        "</a>" +
        "</td>" +
        "<td>" +
        person.missed_votes +
        "</td>" +
        "<td>" +
        person.missed_votes_pct +
        "</td>" +
        "</tr>";
    }

    // if the next representative have same amount of missed_votes_pct, add him to the table
    let lastPerson = persons[senateStatistics.render_threshold];
    for (const person of persons.slice(senateStatistics.render_threshold + 1)) {
      if (person.missed_votes_pct !== lastPerson.missed_votes_pct) {
        break;
      } else {
        table +=
          "<tr>" +
          "<td>" +
          '<a href="' +
          person.url +
          '">' +
          person.first_name +
          " " +
          (person.middle_name || "") +
          person.last_name +
          "</a>" +
          "</td>" +
          "<td>" +
          person.missed_votes +
          "</td>" +
          "<td>" +
          person.missed_votes_pct +
          "</td>" +
          "</tr>";
        lastPerson = person;
        console.log(lastPerson);
      }
    }

    table += "</tbody>" + "</table>";

    document.getElementById("senate-least-engaged-table").innerHTML = table;
  }

  if (document.getElementById("senate-most-engaged-table")) {
    // sort in ascending order, representatives with lowest "missed_votes_pct" are first
    const persons = tablesData["senate-data"].sort(function (x, y) {
      return x.missed_votes_pct - y.missed_votes_pct;
    });

    let table =
      "<table>" +
      "<thead>" +
      "<tr>" +
      "<th>Name</th>" +
      "<th>No. of Missed Votes</th>" +
      "<th>% Missed</th>" +
      "</tr>" +
      "<tr>" +
      "</thead>" +
      "<tbody>";

    // add to table all representatives up the the amount defined in the render_threshold
    for (const person of persons.slice(0, senateStatistics.render_threshold)) {
      table +=
        "<tr>" +
        "<td>" +
        '<a href="' +
        person.url +
        '">' +
        person.first_name +
        " " +
        (person.middle_name || "") +
        person.last_name +
        "</a>" +
        "</td>" +
        "<td>" +
        person.missed_votes +
        "</td>" +
        "<td>" +
        person.missed_votes_pct +
        "</td>" +
        "</tr>";
    }

    // if the next representative have same amount of missed_votes_pct, add him to the table
    let lastPerson = persons[senateStatistics.render_threshold];
    for (const person of persons.slice(senateStatistics.render_threshold + 1)) {
      if (person.missed_votes_pct !== lastPerson.missed_votes_pct) {
        break;
      } else {
        table +=
          "<tr>" +
          "<td>" +
          '<a href="' +
          person.url +
          '">' +
          person.first_name +
          " " +
          (person.middle_name || "") +
          person.last_name +
          "</a>" +
          "</td>" +
          "<td>" +
          person.missed_votes +
          "</td>" +
          "<td>" +
          person.missed_votes_pct +
          "</td>" +
          "</tr>";
        lastPerson = person;
        console.log(lastPerson);
      }
    }

    table += "</tbody>" + "</table>";

    document.getElementById("senate-most-engaged-table").innerHTML = table;
  }
}
