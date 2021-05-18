<template>
  <div class="LoyaltyTable">
    <table class="table table-responsive table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>No. Party Votes</th>
          <th>% Party Votes</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(member, key) in members" v-bind:key="key">
          <td>
            <a v-bind:href="member.url">
              {{ member.first_name }} {{ member.middle_name }}
              {{ member.last_name }}
            </a>
          </td>
          <td>
            {{
              (
                ((member.total_votes - member.missed_votes) *
                  member.votes_with_party_pct) /
                100
              ).toFixed()
            }}
          </td>
          <td>{{ member.votes_with_party_pct }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getLeastMostMembers } from "../logic";
export default {
  name: "LoyaltyTable",
  props: {
    tableProps: Object,
  },
  data() {
    return {
      members: [],
    };
  },
  mounted() {
    getLeastMostMembers(
      this.tableProps.memberType,
      this.tableProps.property,
      this.tableProps.order
    )
      .then((members) => (this.members = members))
      .catch((error) =>
        alert(
          "There was an error. Remain calm and contact customer support ;) " +
            error.message
        )
      );
  },
};
</script>

<style></style>
