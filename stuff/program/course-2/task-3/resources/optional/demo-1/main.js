fetch('./members.json')
    .then(function (res) {
        return res.json()
    })
    .then(function (members) {
        //debugger

        var ul = document.createElement('ul')

        /*
        var lis = members.map(function(member) {
            var li = document.createElement('li')

            li.innerText = member.name + ' (' + member.party + ')'

            return li
        })

        //ul.append.apply(ul, lis)

        lis.forEach(function(li) {
            ul.append(li)
        })
        */

        members.forEach(function (member) {
            var li = document.createElement('li')

            li.innerText = member.name + ' (' + member.party + ')'

            ul.append(li)
        })

        document.body.append(ul)
    })