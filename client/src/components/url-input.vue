<template>
  <form @submit.prevent="handleSubmit">
    <fieldset class="field">
      <label class="label" for="url">Enter URL to shorten</label>
      <input class="input" id="url" :value="input" type="text" />
    </fieldset>
    <button class="button" type="submit">
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

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  border: 0;
  padding: 0;
  margin-bottom: 0.7rem;
}

.label {
  margin-bottom: 0.2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  min-height: 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 0.2rem 0.45rem;
}

.button {
  display: block;
  margin-left: auto;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 1px;
  background-color: #4b4141fe;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 3px #cccccc55;
  padding: 0.7rem 1rem;
  color: #fff;
  transition: 0.25s ease-out;
  transition-property: color, background-color;
}

.button:focus,
.button:hover {
  background-color: #fefefe;
  color: #000;
  outline: none;
  cursor: pointer;
}
</style>
