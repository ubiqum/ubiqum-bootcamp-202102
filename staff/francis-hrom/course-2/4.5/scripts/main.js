startPage();

async function startPage() {
  // get data from API
  senateData = await getSenateDataFromAPI();
  houseData = await getHouseDataFromAPI();

  // get save data from local JS file without use of remote API
/*   senateData = senateDataSourceInput.results[0].members;
  houseData = houseDataSourceInput.results[0].members; */
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
      app.atGlanceTable = prepareAtGlanceTable(table.statistics);
      /* pre Vue code
      renderTable(table.tableID, table.prepareFx(table.statistics));
      */
    }
  });

  // render all "most / least" tables for both house and senate
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
