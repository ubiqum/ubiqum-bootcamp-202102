<template>
  <div class="Attendance">
    <article>
      <b-row>
        <b-col col sm="6">
          <h1>Attendance</h1>
          <p>
            The Constitution specifies that a majority of members constitutes a
            quorum to do business in each house. Representatives and senators
            rarely force the presence of a quorum by demanding quorum calls;
            thus, in most cases, debates continue even if a majority is not
            present.
          </p>
          <p>
            The Senate uses roll-call votes; a clerk calls out the names of all
            the senators, each senator stating "aye" or "no" when his or her
            name is announced. The House reserves roll-call votes for the most
            formal matters, as a roll-call of all 435 representatives takes
            quite some time; normally, members vote by electronic device. In the
            case of a tie, the motion in question fails. In the Senate, the Vice
            President may (if present) cast the tiebreaking vote.
          </p>
        </b-col>

        <b-col col sm="6">
          <h2>
            {{ memberType.charAt(0).toUpperCase() + memberType.slice(1) }} at a
            glance
          </h2>
          <AtGlanceTable v-bind:memberType="memberType" />
        </b-col>
      </b-row>

      <b-row>
        <b-col col sm="6">
          <h2>Least Engaged (Bottom 10% Attendance)</h2>
          <AttendanceTable v-bind:tableProps="leastTableProps" />
        </b-col>

        <b-col col sm="6">
          <h2>Most Engaged (Top 10% Attendance)</h2>
          <AttendanceTable v-bind:tableProps="mostTableProps" />
        </b-col>
      </b-row>
    </article>
  </div>
</template>

<script>
import AtGlanceTable from "@/components/AtGlanceTable.vue";
import AttendanceTable from "@/components/AttendanceTable.vue";
export default {
  name: "Attendance",
  props: {
    type: String,
  },
  components: {
    AtGlanceTable,
    AttendanceTable,
  },
  data() {
    return {
      memberType: this.type,
      leastTableProps: {
        memberType: this.type,
        property: "missed_votes_pct",
        order: -1,
      },
      mostTableProps: {
        memberType: this.type,
        property: "missed_votes_pct",
        order: 1,
      },
    };
  },
};
</script>

<style></style>
