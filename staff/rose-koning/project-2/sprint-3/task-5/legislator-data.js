//get search parameter
var parameterState = new URLSearchParams(window.location.search);
var state = parameterState.get("state");
if(state===null){
    state="AL"
}
var searchedState = state.toLowerCase();
var parameterPage = new URLSearchParams(window.location.search);
var page = parameterPage.get("page");
if (page === null){
    page=1;
}

//get jurisdictionID that coincides with the searchedState
getJurisdictionID(searchedState, function (jurisdictionID) {
  //set default value of page to 1
  var url =
  "https://v3.openstates.org/people?jurisdiction=" +
  jurisdictionID +
  "&page="+ page +"&per_page=10&apikey=640d3190-2907-402a-afaf-6bd88f7caf3b";

  if (!localStorage[jurisdictionID+"-"+page]){

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    // add the date into the table with vue
    .then(function (_data) {
    var  data = _data;
    //construct elements in pagination bar
    var pageNumbers=data.pagination.max_page;
    localStorage[jurisdictionID+"-"+page]=JSON.stringify(data);
    makeVue(data,pageNumbers);
    
    })
  }
  else{
    data= JSON.parse(localStorage[jurisdictionID+"-"+page])
    var pageNumbers=data.pagination.max_page;
    makeVue(data,pageNumbers);
  }
  })