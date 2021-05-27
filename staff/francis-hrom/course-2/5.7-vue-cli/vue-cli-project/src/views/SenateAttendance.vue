<template>
  <div class="SenateAttendance">
    <Attendance v-bind:type="type" />
  </div>
</template>

<script>
import Attendance from "@/components/Attendance.vue";
export default {
  name: "SenateAttendance",
  components: {
    Attendance,
  },
  data() {
    return {
      type: "senate",
    };
  },
};
</script>

<style></style>
