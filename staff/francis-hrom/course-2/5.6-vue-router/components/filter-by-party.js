Vue.component("filter-by-party", {
    data() {
        return {
            checkedParties: ["R","D","ID"],
        }
    },
    methods: {
        changeCheckedParties() {
            this.$emit('checkedParties',this.checkedParties);
        }
    },
  template: `
    <div>
    <label for="filter-by-party">Filter by Party:</label>
    <input type="checkbox" id="R" value="R" v-model="checkedParties" @change="changeCheckedParties()">
    <label for="R">Republican</label>
    <input type="checkbox" id="D" value="D" v-model="checkedParties" @change="changeCheckedParties()">
    <label for="D">Democrat</label>
    <input type="checkbox" id="ID" value="ID" v-model="checkedParties" @change="changeCheckedParties()">
    <label for="ID">Independent</label>
    </div>
    `,
});
