const SenateLoyalty=  {
    template: /*html*/
    `<div>
        <footer>
            <div class="row">
            <div class="col-sm-6">
                <h2>Party Loyalty</h2>
                <p>Those who consider themselves to be strong partisans, strong Democrats and strong Republicans
                    respectively,
                    tend to be the most faithful in voting for their party's nominee for office and legislation that
                    backs
                    their
                    party's agenda. </p>
            </div>
            <div class="col-sm-6 text-right">
                <h2>Senate at a glance</h2>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="text-center">Party</th>
                            <th class="text-center">Number of Reps</th>
                            <th class="text-center">% Voted with Prty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="trDemocrat">
                            <td>Democrat</td>
                        </tr>
                        <tr id="trRepublican">
                            <td>Republican</td>
                        </tr>
                        <tr id="trIndependent">
                            <td>Independent</td>
                        </tr>
                        <tr id="trTotal">
                            <td>Total</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <h2>Least Loyal (Bottom 10% of Party)</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number Party Votes</th>
                                <th>% Party Votes</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyMostLoyal"></tbody>
                    </table>
                </div>
                <div class="col-sm-6">
                    <h2>Most Loyal (Top 10% of Party)</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number Party Votes</th>
                                <th>% Party Votes</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyLeastLoyal"></tbody>
                    </table>
                </div>
            </div>
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                <p class="text-dark" href="#">@ 2016 TGIF | All Rights Reserved</p>
            </div>
        </footer>
    </div>
    `
}