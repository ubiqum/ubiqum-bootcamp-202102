
            document.getElementById("clickMe").onclick = createList();


            function createList() {



                var rows = ''
                var names = ''
                var party = ''
                var state = ''
                var seniority = ''
                var votes = ''
                var url = ''
                var value = []
                var selectState = document.getElementById("state-filter").value

                var table = document.getElementById("data")



                var members = data.results[0].members;

                var headers = '<tr><th style="text-align:center;">' + "SENATOR" + '</th><th style="text-align:center;">'
                    + "PARTY AFFILIATION" + '</th><th style="text-align:center;">' + "STATE" + '</th><th style="text-align:center;">'
                    + "SENIORITY" + '</th><th style="text-align:center;">'
                    + "PERCENTAGE OF VOTES WITH PARTY"
                    + '</th></tr>'
                rows += headers

                var selectedParties = document.querySelectorAll('input[name=party]:checked')

                for (var o = 0; o < selectedParties.length; o++) {
                    value.push(selectedParties[o].value)
                }


                for (var i = 0; i < members.length; i++) {

                    url = members[i].url
                    names = (members[i].first_name) + ' ' + (members[i].middle_name ||= '')
                        + ' ' + (members[i].last_name)
                    party = members[i].party
                    state = members[i].state
                    seniority = members[i].seniority
                    votes = members[i].votes_with_party_pct

                    for (var o = 0; o < value.length; o++) {

                        if (value[o] == party && selectState == state) {


                            var row = '<tr><td>' + '<a href = ' + url + '>' + names + '</a>' + '</td><td>' + party + '</td><td>' + state +
                                '</td><td>' + seniority + '</td><td>' + votes + '%' + '</td></tr>'
                            rows += row
                        }
                        if (value[o] == party && selectState === "") {


                            var row = '<tr><td>' + '<a href = ' + url + '>' + names + '</a>' + '</td><td>' + party + '</td><td>' + state +
                                '</td><td>' + seniority + '</td><td>' + votes + '%' + '</td></tr>'
                            rows += row
                        }

                    }


                }

                table.innerHTML = rows

            }
