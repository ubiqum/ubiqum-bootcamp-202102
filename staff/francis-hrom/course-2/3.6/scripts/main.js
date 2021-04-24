"use strict";

activateDropdown();
activateCheckboxes();

memberDataTables.forEach((table) => {
  calculateStatistics(table.data, table.statistics);
});

renderAllVisibleTables();

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
