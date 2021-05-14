function createLoyalty(memberType) {
  return {
    data() {
      return {
        memberType: memberType,
        leastTableProps: {
          sortFx: sortAscending,
          memberType: memberType,
          sortElement: "votes_with_party_pct",
        },
        mostTableProps: {
          sortFx: sortDescending,
          memberType: memberType,
          sortElement: "votes_with_party_pct",
        },
      };
    },
    template: `<div>
    <article class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1>Party Loyalty</h1>
          <p>
          Those who consider themselves to be strong partisans, strong Democrats and strong Republicans respectively, tend to be the most faithful in voting for their party's nominee for office and legislation that backs their party's agenda.
          </p>
        </div>

        <div class="col-sm-6">
          <h2>{{memberType.charAt(0).toUpperCase() + memberType.slice(1)}} at a glance</h2>
          <at-glance-table v-bind:memberType="memberType"></at-glance-table>
        </div>
      </div>
        
      <div class="row">

        <div class="col-sm-6">
          <h2>Least Loyal (Bottom 10% of Party)</h2>
          <loyalty-table v-bind:tableProps="leastTableProps"></loyalty-table>
        </div>

        <div class="col-sm-6">
          <h2>Most Loyal (Top 10% of Party)</h2>
          <loyalty-table v-bind:tableProps="mostTableProps"></loyalty-table>
        </div>
      </div>
    </article>
    </div>`,
  };
}
