const Senate = {
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
      if (selectedState) {
        this.selectedState = selectedState;
      }
      if (selectedState=="ALL") {
        this.selectedState = null;
      }
      retrieveMembers("senate", this.checkedParties, this.selectedState)
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
                <h1>Senators</h1>
                <p>
                First convened in 1789, the composition and powers of the Senate are
                established in Article One of the U.S. Constitution. Each state is
                represented by two senators, regardless of population, who serve
                staggered six-year terms. The Senate has several exclusive powers
                not granted to the House, including consenting to treaties as a
                precondition to their ratification and consenting to or confirming
                appointments of Cabinet secretaries, federal judges, other federal
                executive officials, military officers, regulatory officials,
                ambassadors, and other federal uniformed officers, as well as trial
                of federal officials impeached by the House.
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

