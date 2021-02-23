function listMembers(congress, chamber, callback) {
    fetch('https://api.propublica.org/congress/v1/' + congress + '/' + chamber + '/members.json',
          {
            headers: {
                'X-API-Key': 'Qtau7BnzCTb7LorWQQBGS7I9Z5LAQK4WEyLD3QFN'
            }
         }
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        callback(data.results[0].members)
    })
}

listMembers(116, 'senate', function(members) {
    var ul = document.querySelector('ul')

    members.forEach(function(member) {
        var li = document.createElement('li')

        li.innerText = member.first_name + ' ' + member.last_name

        ul.append(li)
    })
})

listMembers(100, 'senate', function(members) {
    console.log('List of Members from Senate / Congress 100')
    
    members.forEach(function(member) {
        console.log(member.first_name + ' ' + member.last_name)
    })
})