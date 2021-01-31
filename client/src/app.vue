<template>
  <header>
    <h1 class="page-heading">URL Shortener</h1>
  </header>
  <url-input />
  <url-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UrlInput from "./components/url-input.vue";
import UrlList from "./components/url-list.vue";

export default defineComponent({
  name: "App",
  components: {
    UrlInput,
    UrlList
  }
});
</script>

<style scoped>
.page-heading {
  font-size: 2rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
