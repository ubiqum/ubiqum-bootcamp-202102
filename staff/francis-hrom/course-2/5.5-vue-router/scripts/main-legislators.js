const app = new Vue({
  el: "#app",
  data: {
    members: {},
    states: {},
    selectedState: "**SELECT STATE**",
  },
});

async function startPage() {
  app.states = await getStatesList();
  document.getElementById("stateFilterDropdown").onchange = setURLStateParam;
  await setFirstItemInStateDropdown();
  return renderLegislatorsTable(getURLStateParam());
}

startPage();
