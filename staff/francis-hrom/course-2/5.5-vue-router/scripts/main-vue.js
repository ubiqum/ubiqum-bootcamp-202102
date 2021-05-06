Vue.component("friend-conponent", {
  props: ["friend"],
  filters: {
    fullName(value) {
      return `${value.last} ${value.first}`;
    },
    ageInOneYear(age) {
      return age + 1;
    },
  },
  methods: {
    inrementAge(friend) {
      friend.age = friend.age + 1;
    },
    decrementAge(friend) {
      friend.age = friend.age - 1;
    },
  },
  template: `
      <div>
          <h4>{{friend | fullName}}</h4>
          <h5>age: {{friend.age}}</h5>
          <button v-on:click="inrementAge(friend) + 1">+</button>
          <button v-on:click="decrementAge(friend) - 1">-</button>
          <input v-model="friend.first"/>
          <input v-model="friend.last"/>
      </div>
      `,
});

// app.$mount("#app")

const app = new Vue({
  el: "#app",
  data: {
    editFriend: null,
    friends: [
      {
        first: "Bobby",
        last: "Fisher",
        age: 35,
      },
      {
        first: "John",
        last: "Doe",
        age: 25,
      },
    ],
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.friends = data;
      });
  },
  filters: {
    fullName(value) {
      return `${value.last} ${value.first}`;
    },
    ageInOneYear(age) {
      return age + 1;
    },
  },
  methods: {
    inrementAge(friend) {
      friend.age = friend.age + 1;
    },
    decrementAge(friend) {
      friend.age = friend.age - 1;
    },
    deleteFriend(id, i) {
      fetch("https://jsonplaceholder.typicode.com/users/" + id, {
        method: "DELETE",
      }).then(() => {
        console.log("DELETED!!!");
        this.friends.splice(i, 1);
      });
    },
    updateFriend(friend) {
      fetch("https://jsonplaceholder.typicode.com/users/" + friend.id, {
        body: JSON.stringify(friend),
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        console.log("UPDATED!!!");
        this.editFriend = null;
      });
    },
  },
  template: `
    <div>
        <li v-for="friend, i in friends">
            <div v-if="editFriend === friend.id">              
                <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
                <button v-on:keyup.13="updateFriend(friend)">save</button>
            </div>
            <div v-else>
                <button v-on:click="editFriend = friend.id">edit</button>
                <button v-on:click="deleteFriend(friend.id, i)">x</button>
                {{friend.name}}
            </div>        
        </li>
    </div>
    `,
});
