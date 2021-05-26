fetch('https://api.propublica.org/congress/v1/116/senate/members.json',
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
    console.log(data)
})