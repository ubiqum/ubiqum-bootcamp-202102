<template>
  <div class="MemberTable">
    <table class="table table-responsive table-hover">
      <thead>
        <th>Name</th>
        <th>Party</th>
        <th>State</th>
        <th>Years in Office</th>
        <th>Votes with party</th>
      </thead>

      <tbody>
        <tr v-for="(member, key) in members" v-bind:key="key">
          <td>
            <a v-bind:href="member.url">
              {{ member.first_name }} {{ member.middle_name }}
              {{ member.last_name }}
            </a>
          </td>
          <td>{{ member.party }}</td>
          <td>{{ member.state }}</td>
          <td>{{ member.seniority }}</td>
          <td>{{ member.votes_with_party_pct }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MemberTable",
  props: {
    members: Array,
  },
};
</script>

<style></style>
