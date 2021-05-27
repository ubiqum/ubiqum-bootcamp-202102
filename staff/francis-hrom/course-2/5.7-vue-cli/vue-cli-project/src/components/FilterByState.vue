<template>
  <div class="FilterByState">
    <b-form-select
      v-model="selectedState"
      :options="states"
      @change="changeSelectedState()"
    >
    </b-form-select>

    <!--     <label for="FilterByState">Filter by State:</label>
    <select
      name="FilterByState"
      v-model="selectedState"
      @change="changeSelectedState()"
    >
      <option value="ALL">ALL</option>

      <option
        v-for="(state, key) in states"
        v-bind:key="key"
        v-bind:value="key"
      >
        {{ state }}
      </option>
    </select> -->
  </div>
</template>

<script>
import { getStatesMap } from "../logic";

export default {
  name: "FilterByState",
  data() {
    return {
      states: {},
      selectedState: "ALL",
    };
  },
  mounted() {
    getStatesMap()
      .then((states) => {
        this.states = { ALL: this.selectedState, ...states };
      })
      .catch((error) =>
        this.$emit(
          "error",
          "There was an error. Remain calm and contact customer support ;) " +
            error.message
        )
      );
  },
  methods: {
    changeSelectedState() {
      this.$emit("selectedState", this.selectedState);
    },
  },
};
</script>

<style></style>
