Vue.component("at-glance-table", {
  props: ["memberType"],
  data() {
    return {
      stats: {},
      parties: {
        D: "Democracts",
        R: "Republicans",
        ID: "Independent",
        total: "Total",
      },
    };
  },
  mounted() {
    getAtGlanceStats(this.memberType)
      .then((stats) => (this.stats = stats))
      .catch((error) =>
        alert(
          "There was an error. Remain calm and contact customer support ;) " +
            error.message
        )
      );
  },
  template: `
    <table class="table table-responsive table-hover">
        <thead>
            <tr>
                <th>Party</th>
                <th>No. of Reps.</th>
                <th>% Voted w/ Party</th>
            </tr>
        </thead> 
        <tbody>
            <tr v-for="(value, key) in parties">
                <td>{{value}}</td>
                <td>{{ stats['number_of_'+key] }}</td>
                <td>{{ (stats['voted_with_party_average_percentage_'+key]||0).toFixed(2) }} </td>
            </tr>
        </tbody>
    </table>
    `,
});
