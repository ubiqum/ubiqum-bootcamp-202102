/* TODO list: check the tree icon for full TODO list
change "openStatesListOfAllStates"
- name retrieveStates
- check if the data is in cache
- if not, call API, get data, adjust them, save to cache

 var statesObject = {
 al:Alabama,
 ak:Alaska,
 az:Arizona
 }

research vue router
https://www.youtube.com/results?search_query=vue+router
https://www.youtube.com/watch?v=mY2MiaYiSdw&ab_channel=LearnCode.academy
https://www.youtube.com/watch?v=4lk9-PYensI&ab_channel=Academind
https://router.vuejs.org/
https://www.digitalocean.com/community/tutorials/how-to-navigate-between-views-with-vue-router


https://github.com/pluscoders/vue-router-simple-demo
https://github.com/pluscoders/vue-router-demo
in end there should be one "SPA" (single page application) 
index.html
view.js (vue components live here)
logic.js 
main.js (vue instance lives here)


*/

async function startPage() {
  // get data from API
  senateData = await retrieveMembers("senate");
  houseData = await retrieveMembers("house");

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


