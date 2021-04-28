startPage();

async function startPage() {
  // get data from API
/*   senateData = await getSenateDataFromAPI();
  houseData = await getHouseDataFromAPI();
 */
  
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
  renderAllVisibleLegislatorsTables();
}

