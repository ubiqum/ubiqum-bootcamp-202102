Vue.component("attendance-table", {
  props: ["tableProps"],
  data() {
    return {
      members: [],
    };
  },
  template: `
    <table class="table table-responsive table-hover">
        <thead>
            <th>Name</th>
            <th>No. Missed Votes</th>
            <th>% Missed</th>
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
  mounted() {
    getLeastMostMembers(
      this.tableProps.memberType,
      this.tableProps.tableOrder,
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
});

{
  /* <tr v-for="member in members">
<td>
<a v-bind:href="member.url">
{{member.first_name}} {{member.middle_name}} {{member.last_name}}
</a>
</td>
<td>{{member.party}}</td>
<td>{{member.state}}</td>
<td>{{member.seniority}}</td>
<td>{{member.votes_with_party_pct}}</td>
</tr> */
}
