<template>
  <div class="HouseLoyalty">
    <Loyalty v-bind:type="type" />
  </div>
</template>

<script>
import Loyalty from "@/components/Loyalty.vue";
export default {
  name: "HouseLoyalty",
  components: {
    Loyalty,
  },
  data() {
    return {
      type: "house",
    };
  },
};
</script>

<style></style>
