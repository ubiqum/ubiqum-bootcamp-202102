/**
 * Creates a Conress screeen component
 *
 * @param {string} type - The type of congress (senate or house)
 * @param {string} title - The title for the screen
 * @param {string} description - The description of the congress
 *
 * @returns {Object} - The screen component
 */
function createCongress(type, title, description) {
  return {
    data() {
      return {
        members: [],
        checkedParties: null,
        selectedState: null,
      };
    },
    mounted() {
      this.onFilterChanged(null, null);
    },
    methods: {
      onFilterByPartyChanged(checkedParties) {
        this.checkedParties = checkedParties;

        this.onFilterChanged(this.checkedParties, this.selectedState);
      },

      onFilterByStateChanged(selectedState) {
        this.selectedState = selectedState;

        this.onFilterChanged(this.checkedParties, this.selectedState);
      },

      onFilterChanged(checkedParties, selectedState) {
        retrieveMembers(type, this.checkedParties, this.selectedState)
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
                <h1>${title}</h1>
                ${description}
            </div>
            
            <div class="col-sm-4"></div>
        </div>
        
        <div class="row">
            <div class="col-sm-7">
                <filter-by-party @checkedParties="onFilterByPartyChanged($event)"></filter-by-party>
            </div>
            <div class="col-sm-5 text-right">
              <filter-by-state @selectedState="onFilterByStateChanged($event === 'ALL'? null : $event)"></filter-by-state>                
            </div>          
        </div>

        <div class="row">
            <member-table v-bind:members="members"></member-table>
        </div>

    </article>
    </div>`,
  };
}
