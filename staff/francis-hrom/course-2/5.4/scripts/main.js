/* startPage();

async function startPage() {
  // get data from API
  senateData = await getDataFromPropublicaOrgAPI("senate");
  houseData = await getDataFromPropublicaOrgAPI("house");

  // get save data from local JS file without use of remote API
  senateData = senateDataSourceInput.results[0].members;
  houseData = houseDataSourceInput.results[0].members;
  return renderPage();
}

function renderPage() {
  assignDataToTables();
  activateCheckboxes();
  activateDropdown();

  calculateAllStatistics();

  renderAllVisibleDataTables();
  renderAllVisibleAtGlanceTables();
  renderAllVisibleLeastMostTables();

} */

renderLegislatorsTable(stateParamFromURL);

// localStorage.clear();

/* 
TODO
read about structure async await try catch
read about vue template syntax
refactor code

*/


/* (function () {
  statements
})(); */

