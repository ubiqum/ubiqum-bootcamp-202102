<template>
  <div class="Loyalty">
    <article class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1>Party Loyalty</h1>
          <p>
            Those who consider themselves to be strong partisans, strong
            Democrats and strong Republicans respectively, tend to be the most
            faithful in voting for their party's nominee for office and
            legislation that backs their party's agenda.
          </p>
        </div>

        <div class="col-sm-6">
          <h2>
            {{ memberType.charAt(0).toUpperCase() + memberType.slice(1) }} at a
            glance
          </h2>
          <AtGlanceTable v-bind:memberType="memberType" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <h2>Least Loyal (Bottom 10% of Party)</h2>
          <LoyaltyTable v-bind:tableProps="leastTableProps" />
        </div>

        <div class="col-sm-6">
          <h2>Most Loyal (Top 10% of Party)</h2>
          <LoyaltyTable v-bind:tableProps="mostTableProps" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import AtGlanceTable from "@/components/AtGlanceTable.vue";
import LoyaltyTable from "@/components/LoyaltyTable.vue";
export default {
  name: "Loyalty",
  props: {
    type: String,
  },
  components: {
    AtGlanceTable,
    LoyaltyTable,
  },
  data() {
    return {
      memberType: this.type,
      leastTableProps: {
        memberType: this.type,
        property: "votes_with_party_pct",
        order: 1,
      },
      mostTableProps: {
        memberType: this.type,
        property: "votes_with_party_pct",
        order: -1,
      },
    };
  },
};
</script>

<style></style>
