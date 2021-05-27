/**
 * Create attendance screen component
 * @param {string} memberType The type of member (House or Senate)
 * @returns {Object} Atendance screen component
 */

function createAttendance(memberType) {
  return {
    data() {
      return {
        memberType: memberType,
        leastTableProps: {
          sortFx: sortDescending,
          memberType: memberType,
          sortElement: "missed_votes_pct",
        },
        mostTableProps: {
          sortFx: sortAscending,
          memberType: memberType,
          sortElement: "missed_votes_pct",
        },
      };
    },
    template: `<article class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1>Attendance</h1>
            <p>
              The Constitution specifies that a majority of members constitutes a
              quorum to do business in each house. Representatives and senators
              rarely force the presence of a quorum by demanding quorum calls;
              thus, in most cases, debates continue even if a majority is not
              present.
            </p>

            <p>
              The Senate uses roll-call votes; a clerk calls out the names of all
              the senators, each senator stating "aye" or "no" when his or her
              name is announced. The House reserves roll-call votes for the most
              formal matters, as a roll-call of all 435 representatives takes
              quite some time; normally, members vote by electronic device. In the
              case of a tie, the motion in question fails. In the Senate, the Vice
              President may (if present) cast the tiebreaking vote.
            </p>
          </div>

          <div class="col-sm-6">
            <h2>{{memberType.charAt(0).toUpperCase() + memberType.slice(1)}} at a glance</h2>
            <at-glance-table v-bind:memberType="memberType"></at-glance-table>
          </div>
        </div>
          
        <div class="row">
          <div class="col-sm-6">
            <h2>Least Engaged (Bottom 10% Attendance)</h2>
            <attendance-table v-bind:tableProps="leastTableProps"></attendance-table>
          </div>

          <div class="col-sm-6">
            <h2>Most Engaged (Top 10% Attendance)</h2>
            <attendance-table v-bind:tableProps="mostTableProps"></attendance-table>
          </div>

        </div>
      </article>`,
  };
}
