<template>
  <div class="HouseAttendance">
    <Attendance v-bind:type="type" />
  </div>
</template>

<script>
import Attendance from "@/components/Attendance.vue";
export default {
  name: "HouseAttendance",
  components: {
    Attendance,
  },
  data() {
    return {
      type: "house",
    };
  },
};
</script>

<style></style>
