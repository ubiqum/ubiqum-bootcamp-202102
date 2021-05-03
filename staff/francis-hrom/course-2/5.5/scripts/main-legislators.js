const app = new Vue({
  el: "#app",
  data: {
    members: {},
    states: allStatesList,
    selectedState: "**SELECT STATE**",
  },
});

document.getElementById("stateFilterDropdown").onchange = setURLStateParam;
setFirstItemInStateDropdown();
renderLegislatorsTable(getURLStateParam());