<template>
  <form @submit.prevent="handleSubmit">
    <fieldset class="field">
      <label class="label" for="url">Enter URL to shorten</label>
      <input
        class="input"
        id="url"
        v-model="userUrl"
        v-bind:class="{ hasError: errorMessage }"
        @input="clearErrorMessage"
        type="text"
      />
      <label class="error" v-if="errorMessage" for="url">
        {{ errorMessage }}
      </label>
    </fieldset>
    <button class="button" type="submit" :disabled="disabled">
      Shorten!
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { validateUrl } from "../utils";

export default defineComponent({
  name: "URLInput",
  data: () => ({
    errorMessage: "",
    userUrl: "",
  }),
  props: {
    disabled: {
      type: Boolean,
    },
    onSuccessfulSubmit: {
      type: Function as PropType<(url: string) => void>,
    },
  },
  methods: {
    clearErrorMessage() {
      this.errorMessage = "";
    },
    handleSubmit() {
      const isUrlValid = validateUrl(this.userUrl);
      this.clearErrorMessage();

      if (isUrlValid) {
        if (this.onSuccessfulSubmit) {
          this.onSuccessfulSubmit(this.userUrl);
        }
      } else {
        this.errorMessage = "You have to enter valid URL.";
      }
    },
  },
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

.input.hasError {
  border-color: #da6262;
}

.error {
  color: #da6262;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: 0.4rem;
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
  background-color: #242020fe;
  outline: none;
  cursor: pointer;
}

.button[disabled] {
  opacity: 0.5;
}
</style>
