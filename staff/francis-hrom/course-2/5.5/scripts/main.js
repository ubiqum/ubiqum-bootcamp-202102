/* TODO
refactor page by page
refactor file by file 
*/

async function startPage() {
  // get data from API
  senateData = await retrieveMembers("senate");
  houseData = await retrieveMembers("house");

  // get save data from local JS file without use of remote API
/*   senateData = senateDataSourceInput.results[0].members;
  houseData = houseDataSourceInput.results[0].members; */
  return renderPage();
}

startPage();

function renderPage() {
  assignDataToTables();
  activateCheckboxes();
  activateDropdown();

  calculateAllStatistics();

  renderAllVisibleDataTables();
  renderAllVisibleAtGlanceTables();
  renderAllVisibleLeastMostTables();
}


