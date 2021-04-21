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

var parameter= new URLSearchParams(window.location.search);
var state = parameter.get("state");
if (state === null) {
    state = "AL";
}
var searchedState = state.toLowerCase();

var page = parameter.get("page");
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