"use strict";

/*
Python Local Server:
https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
python3 -m http.server
http://localhost:8000/
*/

activateDropdown();
activateCheckboxes();

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
