startPage();

async function startPage() {
  senateData = await getSenateDataFromAPI();
  houseData = await getHouseDataFromAPI();  
  return renderPage();
}

function renderPage() {
  // assign relevant data to tables
memberDataTables = [
  {
    tableID: "senateDataTable",
    data: getData(senateData),
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

  activateCheckboxes();
  activateDropdown();

  memberDataTables.forEach((table) => {
    calculateStatistics(table.data, table.statistics);
  });

  renderAllVisibleDataTables();

  atGlanceTables.forEach((table) => {
    if (document.getElementById(table.tableID)) {
      renderTable(table.tableID, table.prepareFx(table.statistics));
    }
  });

  leastMostTables.forEach((table) => {
    if (document.getElementById(table.tableID)) {
      renderTable(
        table.tableID,
        table.prepareFx(
          table.sortFx(table.data, table.sortBy),
          table.statistics.render_threshold,
          table.sortBy
        )
      );
    }
  });
}
