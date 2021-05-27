<template>
  <div>
    <b-alert show v-bind:variant="type">{{ message }}</b-alert>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  props: {
    type: String,
    message: String,
  },
};
</script>
