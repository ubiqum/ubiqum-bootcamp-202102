var rows = ''

var statistics = [
    //numberOfRepublicans
    {
        party: 'Republicans',
        numbers: republicans,
        percentage: averageVotesRepublicans
    },
    //numberOfDemocrats
    {
        party: 'Democrats',
        numbers: democrats,
        percentage: averageVotesDemocrats
    },
    //numberOfIndependents
    {
        party: 'Independents',
        numbers: independents,
        percentage: averageVotesIndependents
    }]

var table = document.getElementById('tableGlance')
var rows = ''

rows += '<tr><th>' + 'Party' + '</th><th>' + 'Number of Representants'
    + '</th><th>' + 'Percentage of votes with Party' + '</th></tr>'


statistics.forEach(function (statistics) {
    rows += '<tr><td>' + statistics.party + '</td><td>' + statistics.numbers +
        '</td><td>' + statistics.percentage.toFixed(2) + '%' + '</td></tr>'
})

table.innerHTML = rows

//least Loyal Members
var statistics2 = leastVotesNumbers
var statistics3 = leastVotesNames
var statistics4 = percentParty



var table2 = document.getElementById('leastLoyaltable')
var rows2 = ''

rows2 += '<tr><th>' + 'Name' + '</th><th>' + 'Number Party Votes'
    + '</th><th>' + '% Party Votes' + '</th></tr>'

for (var i = 0; i < statistics3.length; i++) {
    rows2 += '<tr><td>' + statistics3[i] + '</td><td>' +
        statistics2[i] + '</td><td>' + statistics4[i].toFixed(4) + '%'
        + '</td></tr>'
}


table2.innerHTML = rows2
//most loyal Members
var statistics5 = mostVotesNumbers
var statistics6 = mostVotesNames
var statistics7 = percentParty2

var table3 = document.getElementById('mostLoyaltable')
var rows3 = ''

rows3 += '<tr><th>' + 'Name' + '</th><th>' + 'Number Party Votes'
    + '</th><th>' + '% Party Votes' + '</th></tr>'

for (var i = 0; i < statistics5.length; i++) {
    rows3 += '<tr><td>' + statistics6[i] + '</td><td>' +
        statistics5[i] + '</td><td>' + statistics7[i].toFixed(4) + '%' + '</td></tr>'
}


table3.innerHTML = rows3
