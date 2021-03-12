function setDropDown(listOfStates){
    for(i=0; i<listOfStates.length;i++){
    
    string = listOfStates[i].id
    locationState=string.indexOf("/state:") + 7
    stateAcronym = string.substring(locationState,locationState+2)
    dropDownMenu =document.getElementById("state-selection");
  
    dropDownElement = document.createElement("a")
    dropDownElement.className = "dropdown-item"
    dropDownElement.href = "?state="+stateAcronym;
    dropDownElement.innerText= listOfStates[i].name;
  
    dropDownMenu.append(dropDownElement);