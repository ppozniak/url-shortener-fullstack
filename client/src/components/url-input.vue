<template>
  <form @submit.prevent="handleSubmit">
    <input :value="input" type="text" placeholder="Enter your URL" />
    <button type="submit">
      Shorten!
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "URLInput",
  data: () => ({
    input: ""
  }),
  methods: {
    handleSubmit(event: Event) {
      console.log(event);
      console.log(this.input);
    }
  }
});
</script>

<style></style>
