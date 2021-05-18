<template>
  <div class="FilterByState">
    <label for="FilterByState">Filter by State:</label>

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
    </select>
  </div>
</template>

<script>
import { getStatesList } from "../logic";

export default {
  name: "FilterByState",
  data() {
    return {
      states: {},
      selectedState: "ALL",
    };
  },
  mounted() {
    getStatesList()
      .then((states) => (this.states = states))
      .catch((error) =>
        alert(
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
