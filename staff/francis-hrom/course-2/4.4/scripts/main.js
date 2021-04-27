
startPage();

async function startPage() {
  senateData = await getSenateDataFromAPI();
  houseData = await getHouseDataFromAPI();
  return renderPage();
}

function renderPage() {
  assignDataToTables();
  activateCheckboxes();
  activateDropdown();

  // calculate statistics for both house and senate
  memberDataTables.forEach((table) => {
    calculateStatistics(table.data, table.statistics);
  });

  renderAllVisibleDataTables();

  // render all "at glance" tables for both house and senate
  atGlanceTables.forEach((table) => {
    if (document.getElementById(table.tableID)) {
      renderTable(table.tableID, table.prepareFx(table.statistics));
    }
  });

    // render all "most / least" tables for both house and senate
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

