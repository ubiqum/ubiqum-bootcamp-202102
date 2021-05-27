<template>
  <div class="AtGlanceTable">
    <b-table striped hover :items="stats"> </b-table>

    <!--     <table class="table table-responsive table-hover">
      <thead>
        <tr>
          <th>Party</th>
          <th>No. of Reps.</th>
          <th>% Voted w/ Party</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in parties" v-bind:key="key">
          <td>{{ value }}</td>
          <td>{{ stats["numberOf" + key] }}</td>
          <td>
            {{
              (stats["votedWithPartyAveragePercentage" + key] || 0).toFixed(2)
            }}
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import { getAtGlanceStats } from "../logic";
export default {
  name: "AtGlanceTable",
  props: {
    memberType: String,
  },
  data() {
    return {
      stats: [],
      /*       parties: {
        D: "Democracts",
        R: "Republicans",
        ID: "Independent",
        Total: "Total",
      }, */
    };
  },
  mounted() {
    getAtGlanceStats(this.memberType)
      .then((stats) => {
        this.stats = stats;
      })
      .catch((error) =>
        alert(
          "There was an error. Remain calm and contact customer support ;) " +
            error.message
        )
      );
  },
};
</script>
