Vue.component('at-glance-table', {
    props: ['memberType'],
    data() {
        return {
            stats: {},
            parties: {
                "D": "Democracts",
                "R": "Republicans",
                "ID": "Independent",
                "total": "Total"
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
    `
});

// is there a better solution in order to avoid Vue warning?                 <td>{{ (stats['voted_with_party_average_percentage_'+key]||0).toFixed(2) }} </td>
// at-glance-table.js Vue warn with <td>{{ stats['voted_with_party_average_percentage_'+key].toFixed(2) }} </td>

/* 
{
    "number_of_D": 57,
    "voted_with_party_average_percentage_D": 96.97052631578948,
    "number_of_R": 46,
    "voted_with_party_average_percentage_R": 88.8445652173913,
    "number_of_ID": 59,
    "voted_with_party_average_percentage_ID": 96.90966101694916,
    "number_of_representatives_total": 162,
    "voted_with_party_average_percentage_total": 94.24158418337665

    
        <tbody>
            <tr v-for="(value, key) in parties">
                <td>{{value}}</td>
                <td>{{ stats['number_of_'+{{key}}] }}</td>
                <td>{{ stats['voted_with_party_average_percentage_'+{{key}}] }}</td>
            </tr>
      </tbody>

      {
    "number_of_D": 57,
    "voted_with_party_average_percentage_D": 96.97052631578948,
    "number_of_R": 46,
    "voted_with_party_average_percentage_R": 88.8445652173913,
    "number_of_ID": 59,
    "voted_with_party_average_percentage_ID": 96.90966101694916,
    "number_of_total": 162,
    "voted_with_party_average_percentage_total": 94.24158418337665
}

} */