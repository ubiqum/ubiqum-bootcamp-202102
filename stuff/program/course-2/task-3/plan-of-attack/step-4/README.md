REVIEW [reduce members into least often voted with parties](https://drive.google.com/file/d/1PNK9zSZ7ohqu8R8dSDVl8irYAFM2V_by/view?usp=sharing)

```js
var members = data.results[0].members

members.sort(function(a, b) {
    return a.votes_with_party_pct - b.votes_with_party_pct
})

var leastOftenVoteMembers = []

var limit = Math.round(members.length / 10)

// altering values on purpose

members[limit + 1] = members[limit]
members[limit + 2] = members[limit]
members[limit + 3] = members[limit]

// now loop to find the matching members (including trailing ones if the have the same votes)

var loop = true

for (var i = 0; loop; i++) {
    var member = members[i]

    if (i < limit) {
        leastOftenVoteMembers.push(member)
    } else if (leastOftenVoteMembers[limit - 1].votes_with_party_pct === member.votes_with_party_pct) {
        leastOftenVoteMembers.push(member)
    } else loop = false
}
false
leastOftenVoteMembers
(14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```