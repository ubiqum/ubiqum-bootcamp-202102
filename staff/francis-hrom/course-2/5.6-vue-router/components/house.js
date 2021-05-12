const House = {
  data() {
    return {
      members: [],
      checkedParties: null,
      selectedState: null,
    };
  },
  mounted() {
    this.onFilterChanged(null);
  },
  methods: {
    onFilterChanged(checkedParties, selectedState) {
      this.checkedParties = checkedParties;
      // ? how to do this more nicely, I need to access value of selectedState when firing change of checkedParties, otherwise it will go with null value
      if (selectedState) {
        this.selectedState = selectedState;
      }
      if (selectedState=="ALL") {
        this.selectedState = null;
      }
      retrieveMembers("house", this.checkedParties, this.selectedState)
        .then((members) => (this.members = members))
        .catch((error) =>
          alert(
            "There was an error. Remain calm and contact customer support ;) " +
              error.message
          )
        );
    },
  },
  template: `<div>
    <article class="container">
        <div class="row">
            <div class="col-sm-8">
                <h1>Congressmen</h1>
                <p>
                The major power of the House is to pass federal legislation that
                affects the entire country, although its bills must also be passed
                by the Senate and further agreed to by the U.S. President before
                becoming law (unless both the House and Senate re-pass the
                legislation with a two-thirds majority in each chamber). The House
                has some exclusive powers: the power to initiate revenue bills, to
                impeach officials (impeached officials are subsequently tried in the
                Senate), and to elect the U.S. President in case there is no
                majority in the Electoral College.
                </p>
                <p>
                Each U.S. state is represented in the House in proportion to its
                population as measured in the census, but every state is entitled to
                at least one representative.
                </p>
            </div>
            <div class="col-sm-4"></div>
        </div>
        
        <div class="row">
            <div class="col-sm-7">
                <filter-by-party @checkedParties="onFilterChanged($event)"></filter-by-party>
            </div>
            <div class="col-sm-5 text-right">
                <filter-by-state @selectedState="onFilterChanged(null,$event)"></filter-by-state>                
            </div>          
        </div>

        <div class="row">
            <member-table v-bind:members="members"></member-table>
        </div>

    </article>
    </div>`,
};

//   <div v-bind:checkedParties="checkedParties">{{checkedParties}}</div>
// this.checkedParties;
