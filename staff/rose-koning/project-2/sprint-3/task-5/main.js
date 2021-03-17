//get search parameter
var parameterState = new URLSearchParams(window.location.search);
var state = parameterState.get("state");
if (state === null) {
  state = "AL";
}
var searchedState = state.toLowerCase();
var parameterPage = new URLSearchParams(window.location.search);
var page = parameterPage.get("page");
if (page === null) {
  page = 1;
}

//get jurisdictionID that coincides with the searchedState
retrieveJurisdictionIdByState(searchedState, function (jurisdictionID) {
  retrieveLegislatorsByJurisdiction(
    jurisdictionID,
    page,
    function (legislators) {
      renderLegislatorsList(legislators);
    }
  );
});
