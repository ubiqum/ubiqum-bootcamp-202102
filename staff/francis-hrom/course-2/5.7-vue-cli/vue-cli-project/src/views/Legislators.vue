<template>
  <div class="Legislators">
    <article class="container">
      <div class="row">
        <div class="col-sm-8">
          <h1>Legislators</h1>
          <p>
            Established by Article I of the Constitution, the Legislative Branch
            consists of the House of Representatives and the Senate, which
            together form the United States Congress. The Constitution grants
            Congress the sole authority to enact legislation and declare war,
            the right to confirm or reject many Presidential appointments, and
            substantial investigative powers.
          </p>
        </div>
        <div class="col-sm-4"></div>
      </div>

      <div class="row">
        <div class="col-sm-7">
          <FilterByState @selectedState="onFilterChanged($event)" />
        </div>
        <div class="col-sm-5 text-right"></div>
      </div>

      <div class="row">
        <LegislatorsTable v-bind:members="members" />
      </div>
    </article>
  </div>
</template>

<script>
import { retrieveLegislators } from "../logic";
import LegislatorsTable from "@/components/LegislatorsTable.vue";
import FilterByState from "@/components/FilterByState.vue";
export default {
  name: "Legislators",
  components: {
    LegislatorsTable,
    FilterByState,
  },
  data() {
    return {
      members: [],
      selectedState: null,
    };
  },
  methods: {
    onFilterChanged(selectedState) {
      this.selectedState = selectedState;
      retrieveLegislators(this.selectedState)
        .then((members) => (this.members = members))
        .catch((error) =>
          alert(
            "There was an error. Remain calm and contact customer support ;) " +
              error.message
          )
        );
    },
  },
};
</script>

<style></style>
