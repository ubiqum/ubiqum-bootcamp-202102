import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import House from "../views/House.vue";
import Senate from "../views/Senate.vue";
import HouseAttendance from "../views/HouseAttendance.vue";
import SenateAttendance from "../views/SenateAttendance.vue";
import HouseLoyalty from "../views/HouseLoyalty.vue";
import SenateLoyalty from "../views/SenateLoyalty.vue";
import Legislators from "../views/Legislators.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/house",
    name: "House",
    component: House,
  },
  {
    path: "/senate",
    name: "Senate",
    component: Senate,
  },
  {
    path: "/house-attendance",
    name: "House Attendace",
    component: HouseAttendance,
  },
  {
    path: "/senate-attendance",
    name: "Senate Attendace",
    component: SenateAttendance,
  },
  {
    path: "/house-loyalty",
    name: "House Loyalty",
    component: HouseLoyalty,
  },
  {
    path: "/senate-loyalty",
    name: "Senate Loyalty",
    component: SenateLoyalty,
  },
  {
    path: "/legislators",
    name: "Legislators",
    component: Legislators,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
