Vue.component("attendance-table", {
  props: ["tableProps"],
  data() {
    return {
      members: [],
    };
  },
  mounted() {
    getLeastMostMembers(
      this.tableProps.memberType,
      this.tableProps.sortFx,
      this.tableProps.sortElement
    )
      .then((members) => (this.members = members))
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
          <th>Name</th>
          <th>No. Missed Votes</th>
          <th>% Missed</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="member in members">
          <td>
          <a v-bind:href="member.url">
          {{member.first_name}} {{member.middle_name}} {{member.last_name}}
          </a>
          </td>
          <td>{{member.missed_votes}}</td>
          <td>{{member.missed_votes_pct}}</td>
        </tr>
      </tbody>
  </table>
  `,
});
