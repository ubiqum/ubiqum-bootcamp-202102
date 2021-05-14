Vue.component("filter-by-state", {
  data() {
    return {
      states: {},
      selectedState: "ALL",
    };
  },
  mounted() {
    getStatesList().then((states) =>
      (this.states = states).catch((error) =>
        alert(
          "There was an error. Remain calm and contact customer support ;) " +
            error.message
        )
      )
    );
  },
  methods: {
    changeSelectedState() {
      this.$emit("selectedState", this.selectedState);
    },
  },
  template: `
    <div>
        <label for="filter-by-state">Filter by State:</label>

        <select name="filter-by-state" v-model="selectedState" @change="changeSelectedState()">
            <option value="ALL">ALL</option>
            <option v-for="(value, key) in states" v-bind:value="key">{{value}}</option>
        </select>
    </div>
    `,
});

// helper function
async function getStatesList() {
  const statesList = {};
  const states = await retrieveStates();

  for (const state of states) {
    const str = state.division_id;
    // get the last two letters from the "division_id" string, whih are abbreviation of that state
    const abbreviation = str.substr(str.length - 2, 2);
    statesList[abbreviation] = state.name;
  }
  return statesList;
}
