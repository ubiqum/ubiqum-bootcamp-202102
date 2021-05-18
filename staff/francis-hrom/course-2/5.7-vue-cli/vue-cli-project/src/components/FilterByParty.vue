<template>
  <div class="FilterByParty">
    <label for="FilterByParty">Filter by Party:</label>
    <input
      type="checkbox"
      id="R"
      value="R"
      v-model="checkedParties"
      @change="changeCheckedParties()"
    />
    <label for="R">Republican</label>
    <input
      type="checkbox"
      id="D"
      value="D"
      v-model="checkedParties"
      @change="changeCheckedParties()"
    />
    <label for="D">Democrat</label>
    <input
      type="checkbox"
      id="ID"
      value="ID"
      v-model="checkedParties"
      @change="changeCheckedParties()"
    />
    <label for="ID">Independent</label>
  </div>
</template>

<script>
export default {
  name: "FilterByParty",
  data() {
    return {
      checkedParties: ["R", "D", "ID"],
    };
  },
  methods: {
    changeCheckedParties() {
      this.$emit("checkedParties", this.checkedParties);
    },
  },
};
</script>

<style></style>
