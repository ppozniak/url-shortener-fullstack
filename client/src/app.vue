<template>
  <main class="app-wrapper">
    <div>
      <header>
        <h1 class="page-heading">URL Shortener</h1>
      </header>
      <url-input :onSuccessfulSubmit="fetchShortenedUrl" />
      <url-list :urls="recentUrls" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UrlInput from "./components/url-input.vue";
import UrlList from "./components/url-list.vue";

export default defineComponent({
  name: "App",
  data: () => ({
    recentUrls: [
      "url1.fdsfasdgsdgs",
      "url1.fdsfasdgsdges",
      "url1.fdsfasdgsdgsf",
      "url1.fdsfasdgsdgsd",
    ],
  }),
  methods: {
    fetchShortenedUrl(url: string) {
      console.log("Fetching this url:", url);
    },
  },
  components: {
    UrlInput,
    UrlList,
  },
});
</script>

<style scoped>
.app-wrapper {
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.page-heading {
  font-size: 3rem;
}
</style>

<style>
body {
  font-family: sans-serif;
  color: #141414;
  background-color: #fefefe;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
