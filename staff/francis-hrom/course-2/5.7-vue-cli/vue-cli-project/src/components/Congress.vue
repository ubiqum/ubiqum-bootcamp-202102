<template>
  <div class="Congress">
    <article class="container">
      <div class="row">
        <div class="col-sm-8">
          <h1>{{ title }}</h1>
          <div v-html="description"></div>
        </div>

        <div class="col-sm-4"></div>
      </div>

      <div class="row">
        <div class="col-sm-7">
          <FilterByParty @checkedParties="onFilterByPartyChanged($event)" />
        </div>
        <div class="col-sm-5 text-right">
          <FilterByState
            @selectedState="
              onFilterByStateChanged($event === 'ALL' ? null : $event)
            "
          />
        </div>
      </div>

      <div class="row">
        <MemberTable v-bind:members="members" />
      </div>
    </article>
  </div>
</template>

<script>
import { retrieveMembers } from "../logic";
import FilterByParty from "@/components/FilterByParty.vue";
import FilterByState from "@/components/FilterByState.vue";
import MemberTable from "@/components/MemberTable.vue";

export default {
  name: "Congress",
  components: {
    FilterByParty,
    FilterByState,
    MemberTable,
  },
  props: {
    type: String,
    title: String,
    description: String,
  },
  data() {
    return {
      members: [],
      checkedParties: null,
      selectedState: null,
    };
  },
  mounted() {
    this.onFilterChanged();
  },
  methods: {
    onFilterByPartyChanged(checkedParties) {
      this.checkedParties = checkedParties;
      this.onFilterChanged();
    },

    onFilterByStateChanged(selectedState) {
      this.selectedState = selectedState;
      this.onFilterChanged();
    },

    onFilterChanged() {
      retrieveMembers(this.type, this.checkedParties, this.selectedState)
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
