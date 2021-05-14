Vue.component("legislator-table", {
  props: ["members"],
  template: `
    <table class="table table-responsive table-hover">
        <thead>
            <th>Name</th>
            <th>Party</th>
            <th>Chamber</th>
            <th>Title</th>
        </thead>

        <tbody>
            <tr v-for="member in members">
                <td>
                    <a v-bind:href="member.openstates_url"> {{member.name}} </a>
                </td>
                <td>{{member.party}}</td>
                <td>{{member.current_role.org_classification}}</td>
                <td>{{member.current_role.title}}</td>
            </tr>
        </tbody>
    </table>
    `,
});
