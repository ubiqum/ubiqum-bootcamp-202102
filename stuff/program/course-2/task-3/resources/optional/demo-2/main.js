var all = []

fetch('./house.json')
    .then(function (res) {
        return res.json()
    })
    .then(function (members) {
        members.forEach(function (member) {
            all.push(member)
        })

        fetch('./senate.json')
            .then(function (res) {
                return res.json()
            })
            .then(function (members) {
                members.forEach(function (member) {
                    all.push(member)
                })

                // paint the view!

                var ul = document.createElement('ul')

                // all.forEach(function (member) {
                //     member.name = member.name.toUpperCase()
                    
                //     var li = document.createElement('li')

                //     li.innerText = member.name + ' (' + member.party + ')'

                //     ul.append(li)
                // })

                // var lis = all.reduce(function (accumulator, member) {
                //     member.name = member.name.toUpperCase()

                //     return accumulator + '<li>' + member.name + ' (' + member.party + ')' + '</li>'
                // }, '')

                // ul.innerHTML = lis

                var lis = ''

                lis = all.reduce(function (lis, member) {
                    member.name = member.name.toUpperCase()

                    return lis + '<li>' + member.name + ' (' + member.party + ')' + '</li>'
                }, lis)

                ul.innerHTML = lis

                document.body.append(ul)

                // statistics

                var stats = { D: 0, R: 0, I: 0 }

                stats = all.reduce(function(stats, member) {
                    stats[member.party]++

                    return stats
                }, stats)

                debugger
            })
    })