function searchInGoogle(query, callback) {
    fetch('https://www.google.com/search?q=' + query)
        .then(function(response) { return response.text() })
        .then(function(html) {
            // console.log(html)

            var parser = new DOMParser

            var doc = parser.parseFromString(html, 'text/html')

            var searchResults = []

            var resultLists = doc.querySelectorAll('.hlcw0c')

            for (var i = 0; i < resultLists.length; i++) {
                var resultList = resultLists[i]

                var results = resultList.querySelectorAll('.g')

                for (var j = 0; j < results.length; j++) {
                    var result = results[j]

                    var a = result.querySelector('a')

                    var url = a.href

                    var h3 = a.querySelector('h3')

                    var title = h3.innerText

                    var span = result.querySelector('span.aCOpRe > span')

                    var preview = span.innerText

                    var searchResult = { title: title, url: url, preview: preview }

                    searchResults.push(searchResult)
                }
            }

            callback(searchResults)
        })
}

searchInGoogle('ubiqum', function(results) {
    console.log(results)
})

searchInGoogle('manuel barzi', function(results) {
    console.log(results)
})

searchInGoogle('davide stefani', function(results) {
    console.log(results)
})

searchInGoogle('puja bhattacharya', function(results) {
    console.log(results)
})