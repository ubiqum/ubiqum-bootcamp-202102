<template>
  <div class="SenateLoyalty">
    <Loyalty v-bind:type="type" />
  </div>
</template>

<script>
import Loyalty from "@/components/Loyalty.vue";
export default {
  name: "SenateLoyalty",
  components: {
    Loyalty,
  },
  data() {
    return {
      type: "senate",
    };
  },
};
</script>

<style></style>
