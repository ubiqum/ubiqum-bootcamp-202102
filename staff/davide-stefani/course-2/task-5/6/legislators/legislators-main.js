function renderLegislatorsList(legislators) {
    var app = new Vue({
        el: "#app",
        data: {
            legislators: legislators.results,
        },
        created: function () {
            setPages(legislators.pagination.max_page);
          },
    });
}

var parameterState = new URLSearchParams(window.location.search);
var state = parameterState.get("state");
if (state === null) {
    state = "AL";
}
var searchedState = state.toLowerCase();
var parameterPage = new URLSearchParams(window.location.search);
var page = parameterPage.get("page");
if (page === null) {
    page = 1
}

retrieveJurisdictionIdByState(searchedState, function (jurisdictionID) {
    retrieveLegislatorsByJurisdiction(
        jurisdictionID,
        page,
        function (legislators) {
            renderLegislatorsList(legislators);
        }
    );
});

function setPages(pageNumbers) {
    var ul = document.getElementById("page_numbers");
    for (i = 1; i < pageNumbers - 1; i++) {
      pageNumber = document.createElement("li");
      pageNumber.className = "page-item";
  
      pageLink = document.createElement("a");
      pageLink.className = "page-link";
      pageLink.innerText = i;
      pageLink.href = "?page=" + i +"&state=" + state.toLowerCase();
      pageNumber.append(pageLink);
      ul.append(pageNumber);
    }
  }

   
 function setDropDown(listOfStates) {
    for (i = 0; i < listOfStates.length; i++) {
        string = listOfStates[i].id;
        locationState = string.indexOf("/state:") + 7;
        stateAcronym = string.substring(locationState, locationState + 2);
        dropDownMenu = document.getElementById("state-selection");

        dropDownElement = document.createElement("a");
        dropDownElement.className = "dropdown-item";
        dropDownElement.href = "?state=" + stateAcronym;
        dropDownElement.innerText = listOfStates[i].name;

        dropDownMenu.append(dropDownElement);
    }
}
