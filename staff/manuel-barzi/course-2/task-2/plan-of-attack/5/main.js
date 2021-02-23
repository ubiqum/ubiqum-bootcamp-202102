var table = document.getElementById("senate-data")

var members = data.results[0].members

members.forEach(function(member) {
    var row = document.createElement('tr')
    
    var fullname = document.createElement('td')
    fullname.innerText = member.first_name
    
    var party = document.createElement('td')
    party.innerText = 'Happy'
    
    row.append(fullname, party)
    
    table.append(row)
})