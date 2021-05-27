<template>
  <div class="FilterByParty">
    <b-form-group label="Filter by Party:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="FilterByParty"
        v-model="checkedParties"
        :aria-describedby="ariaDescribedby"
        name="FilterByParty"
      >
        <b-form-checkbox value="R" @change="changeCheckedParties()"
          >Republican</b-form-checkbox
        >
        <b-form-checkbox value="D" @change="changeCheckedParties()"
          >Democrat</b-form-checkbox
        >
        <b-form-checkbox value="ID" @change="changeCheckedParties()"
          >Independent</b-form-checkbox
        >
      </b-form-checkbox-group>
    </b-form-group>

    <!--     <label for="FilterByParty">Filter by Party:</label>
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
    <label for="ID">Independent</label> -->
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
