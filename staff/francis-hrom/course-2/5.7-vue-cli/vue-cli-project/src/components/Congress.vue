<template>
  <div>
    <b-row>
      <b-col col sm="8">
        <h1>{{ title }}</h1>
        <div v-html="description"></div>
      </b-col>

      <b-col col sm="4"></b-col>
    </b-row>

    <Feedback v-if="error" type="danger" v-bind:message="error" />

    <b-row>
      <b-col col sm="8">
        <FilterByParty @checkedParties="onFilterByPartyChanged($event)" />
      </b-col>
      <b-col col sm="4">
        <FilterByState
          @selectedState="
            onFilterByStateChanged($event === 'ALL' ? null : $event)
          "
          @error="onError($event)"
        />
      </b-col>
    </b-row>

    <b-row>
      <MemberTable v-bind:members="members" />
    </b-row>
  </div>
</template>

<script>
import { retrieveMembers } from "../logic";
import FilterByParty from "@/components/FilterByParty.vue";
import FilterByState from "@/components/FilterByState.vue";
import MemberTable from "@/components/MemberTable.vue";
import Feedback from "@/components/Feedback.vue";
import { createErrorFeedback } from "./helpers";

export default {
  name: "Congress",
  components: {
    FilterByParty,
    FilterByState,
    MemberTable,
    Feedback,
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
      error: null,
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
        .then((members) => {
          this.members = members;
        })
        .catch((error) => {
          this.error = createErrorFeedback(error.message);
        });
    },

    onError(message) {
      this.error = createErrorFeedback(message);
    },
  },
};
</script>
