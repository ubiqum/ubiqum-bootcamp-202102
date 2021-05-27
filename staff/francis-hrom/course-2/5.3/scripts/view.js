// assign relevant data to tables
function assignDataToTables() {
  legislatorsDataTables = [{
    tableID: "legislatorsDataTable",
    data: openStatesColoradoStateLegistratorsListPage1.results,
  }];

  memberDataTables = [
    {
      tableID: "senateDataTable",
      data: senateData,
      statistics: senateStatistics,
    },
    {
      tableID: "houseDataTable",
      data: houseData,
      statistics: houseStatistics,
    },
  ];

  atGlanceTables = [
    {
      tableID: "senateAtGlanceTable",
      data: senateData,
      prepareFx: prepareAtGlanceTable,
      statistics: senateStatistics,
    },
    {
      tableID: "houseAtGlanceTable",
      data: houseData,
      prepareFx: prepareAtGlanceTable,
      statistics: houseStatistics,
    },
  ];

  leastMostTables = [
    {
      tableID: "senateLeastEngagedTable",
      data: senateData,
      sortBy: "missed_votes_pct",
      sortFx: sortDsc,
      prepareFx: prepareEngagedTable,
      statistics: senateStatistics,
    },
    {
      tableID: "senateMostEngagedTable",
      data: senateData,
      sortBy: "missed_votes_pct",
      sortFx: sortAsc,
      prepareFx: prepareEngagedTable,
      statistics: senateStatistics,
    },
    {
      tableID: "senateLeastLoyalTable",
      data: senateData,
      sortBy: "votes_with_party_pct",
      sortFx: sortAsc,
      prepareFx: prepareLoyalTable,
      statistics: senateStatistics,
    },
    {
      tableID: "senateMostLoyalTable",
      data: senateData,
      sortBy: "votes_with_party_pct",
      sortFx: sortDsc,
      prepareFx: prepareLoyalTable,
      statistics: senateStatistics,
    },
    {
      tableID: "houseLeastEngagedTable",
      data: houseData,
      sortBy: "missed_votes_pct",
      sortFx: sortDsc,
      prepareFx: prepareEngagedTable,
      statistics: houseStatistics,
    },
    {
      tableID: "houseMostEngagedTable",
      data: houseData,
      sortBy: "missed_votes_pct",
      sortFx: sortAsc,
      prepareFx: prepareEngagedTable,
      statistics: houseStatistics,
    },
    {
      tableID: "houseLeastLoyalTable",
      data: houseData,
      sortBy: "votes_with_party_pct",
      sortFx: sortAsc,
      prepareFx: prepareLoyalTable,
      statistics: houseStatistics,
    },
    {
      tableID: "houseMostLoyalTable",
      data: houseData,
      sortBy: "votes_with_party_pct",
      sortFx: sortDsc,
      prepareFx: prepareLoyalTable,
      statistics: houseStatistics,
    },
  ];
}

// detects existance of checkboxes and add event listeners to them
function activateCheckboxes() {
  if (document.getElementById("partyFilterCheckboxes")) {
    const checkboxes = document
      .getElementById("partyFilterCheckboxes")
      .getElementsByTagName("input");

    for (const checkbox of checkboxes) {
      if (checkbox.type === "checkbox") {
        checkbox.onchange = renderAllVisibleDataTables;
      }
    }
  }
}

// detects existance of dropdown, add items adn event listeners to dropdown
function activateDropdown() {
  if (document.getElementById("stateFilterDropdown")) {
    // create dropdown menu with the list of states
    let dropdownStatesOptions = '<option value="">*ALL*</option>';

    for (const state of statesList) {
      state.id;
      dropdownStatesOptions +=
        '<option value="' + state + '">' + state + "</option>";
    }

    document.getElementById(
      "stateFilterDropdown"
    ).innerHTML = dropdownStatesOptions;

    // add event listener to dropdown
    document.getElementById(
      "stateFilterDropdown"
    ).onchange = renderAllVisibleDataTables;
  }
}

// get values of selected party checklists
const getPartyCheckboxValues = () => {
  if (document.getElementById("partyFilterCheckboxes")) {
    return [...document.querySelectorAll("input:checked")].map((e) => e.value);
  }
};

// get value of state selected in dropdown
const getStateDropdownValue = () => {
  if (document.getElementById("stateFilterDropdown")) {
    return document.getElementById("stateFilterDropdown").value;
  }
};

// detects visible tables on page, filters data by values in checkboxes and dropdown, prepares render data and renders them
function renderAllVisibleDataTables() {
  memberDataTables.forEach((table) => {
    if (document.getElementById(table.tableID)) {
      let data = filterMembers(
        table.data,
        getPartyCheckboxValues(),
        getStateDropdownValue()
      );
      app.members = data;
      /* pre Vue code
      data = prepareDataTable(data);
      renderTable(table.tableID, data);
      */
    }
  });
}

// renders prepared table data to page
function renderTable(tableID, data) {
  const table = document.getElementById(tableID);
  table.innerHTML = "";
  if (data.length > 0) {
    renderTableHead(table, data);
    renderTableBody(table, data);
  }
}

function renderTableHead(table, data) {
  const headData = Object.keys(data[0]);
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const key of headData) {
    const th = document.createElement("th");
    th.innerHTML = key;
    row.appendChild(th);
  }
}

function renderTableBody(table, data) {
  for (const element of data) {
    const row = table.insertRow();
    for (const key in element) {
      const cell = row.insertCell();
      cell.innerHTML = element[key];
    }
  }
}

function prepareDataTable(data) {
  const arr = [];
  for (const person of data) {
    arr.push({
      Name: ahrefName(person),
      Party: person.party,
      State: person.state,
      "Years in Office": person.seniority,
      "Votes with party": person.votes_with_party_pct,
    });
  }
  return arr;
}

function concatName(person) {
  return (
    person.first_name + " " + (person.middle_name || "") + person.last_name
  );
}

// creates member's name as hypertext link to member's website
function ahrefName(person) {
  return '<a href="' + person.url + '">' + concatName(person) + "</a>";
}

function prepareAtGlanceTable(data) {
  const arr = [
    {
      Party: "Democrats",
      "No. of Reps.": data.number_of_democracts,
      "% Voted w/ Party": data.voted_with_party_average_percentage_democracts.toFixed(
        2
      ),
    },
    {
      Party: "Republicans",
      "No. of Reps.": data.number_of_republicans,
      "% Voted w/ Party": data.voted_with_party_average_percentage_republicans.toFixed(
        2
      ),
    },
    {
      Party: "Independents",
      "No. of Reps.": data.number_of_independents,
      "% Voted w/ Party": data.voted_with_party_average_percentage_independents.toFixed(
        2
      ),
    },
    {
      Party: "Total",
      "No. of Reps.": data.number_of_representatives_total,
      "% Voted w/ Party": data.voted_with_party_average_percentage_total.toFixed(
        2
      ),
    },
  ];
  return arr;
}

function prepareEngagedTable(data, render_threshold, sortBy) {
  const arr = [];

  for (const person of data.slice(0, render_threshold)) {
    arr.push({
      Name: concatName(person),
      url: person.url,
      /*pre Vue code "Name": ahrefName(person), */
      "No. Missed Votes": person.missed_votes,
      "% Missed": person.missed_votes_pct,
    });
  }

  let lastPerson = data[render_threshold - 1];
  for (const person of data.slice(render_threshold)) {
    if (person[sortBy] === lastPerson[sortBy]) {
      arr.push({
        Name: concatName(person),
        url: person.url,
        /*pre Vue code "Name": ahrefName(person), */
        "No. Missed Votes": person.missed_votes,
        "% Missed": person.missed_votes_pct,
      });
      lastPerson = person;
    } else {
      break;
    }
  }
  return arr;
}

function prepareLoyalTable(data, render_threshold, sortBy) {
  const arr = [];

  for (const person of data.slice(0, render_threshold)) {
    arr.push({
      Name: concatName(person),
      url: person.url,
      /*pre Vue code "Name": ahrefName(person), */
      "No. Party Votes": (
        (person.total_votes * person.votes_with_party_pct) /
        100
      ).toFixed(0),
      "% Party Votes": person.votes_with_party_pct,
    });
  }

  let lastPerson = data[render_threshold - 1];
  for (const person of data.slice(render_threshold)) {
    if (person[sortBy] === lastPerson[sortBy]) {
      arr.push({
        Name: concatName(person),
        url: person.url,
        /*pre Vue code "Name": ahrefName(person), */
        "No. Party Votes": (
          (person.total_votes * person.votes_with_party_pct) /
          100
        ).toFixed(0),
        "% Party Votes": person.votes_with_party_pct,
      });
      lastPerson = person;
    } else {
      break;
    }
  }

  return arr;
}

function renderAllVisibleAtGlanceTables() {
  // render all "at glance" tables for both house and senate
  atGlanceTables.forEach((table) => {
    if (document.getElementById(table.tableID)) {
      app.atGlanceTable = prepareAtGlanceTable(table.statistics);
      /* pre Vue code
        renderTable(table.tableID, table.prepareFx(table.statistics));
        */
    }
  });
}

function renderAllVisibleLeastMostTables() {
  // render all "least / most" tables for both house and senate
  leastMostTables.forEach((table) => {
    if (document.getElementById(table.tableID)) {
      if (table.tableID.search("LeastEngagedTable") > 0) {
        app.leastEngagedTable = table.prepareFx(
          table.sortFx(table.data, table.sortBy),
          table.statistics.render_threshold,
          table.sortBy
        );
      }

      if (table.tableID.search("MostEngagedTable") > 0) {
        app.mostEngagedTable = table.prepareFx(
          table.sortFx(table.data, table.sortBy),
          table.statistics.render_threshold,
          table.sortBy
        );
      }

      if (table.tableID.search("LeastLoyalTable") > 0) {
        app.leastLoyalTable = table.prepareFx(
          table.sortFx(table.data, table.sortBy),
          table.statistics.render_threshold,
          table.sortBy
        );
      }

      if (table.tableID.search("MostLoyalTable") > 0) {
        app.mostLoyalTable = table.prepareFx(
          table.sortFx(table.data, table.sortBy),
          table.statistics.render_threshold,
          table.sortBy
        );
      }

      /* pre Vue code
        renderTable(
          table.tableID,
          table.prepareFx(
            table.sortFx(table.data, table.sortBy),
            table.statistics.render_threshold,
            table.sortBy
          )
        );
        */
    }
  });
}


// render all "legislators" tables 
function renderAllVisibleLegislatorsTables() {
  legislatorsDataTables.forEach((table) => {
    if (document.getElementById(table.tableID)) {
      app.members = table.data;
    }
  });
}