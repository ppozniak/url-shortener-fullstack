<template>
  <main class="app-wrapper">
    <div>
      <header>
        <h1 class="page-heading">URL Shortener</h1>
      </header>
      <url-input
        :disabled="fetchingData"
        :onSuccessfulSubmit="fetchShortenedUrl"
      />
      <div class="statuses">
        <div v-if="fetchingData">Shortening...</div>
        <div v-if="errorMessage">{{ errorMessage }}</div>
      </div>
      <url-list :urls="recentUrls" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UrlInput from "./components/url-input.vue";
import UrlList from "./components/url-list.vue";

import { urlApi } from "./api";

export default defineComponent({
  name: "App",
  data: () => ({
    fetchingData: false,
    errorMessage: "",
    recentUrls: [
      "url1.fdsfasdgsdgs",
      "url1.fdsfasdgsdges",
      "url1.fdsfasdgsdgsf",
      "url1.fdsfasdgsdgsd",
    ],
  }),
  methods: {
    async fetchShortenedUrl(url: string) {
      this.fetchingData = true;
      this.errorMessage = "";
      try {
        const { data } = await urlApi.requestShortenedUrl(url);
        console.log(data);
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
      } finally {
        this.fetchingData = false;
      }
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

.statuses:empty {
  display: none;
}

.statuses {
  margin-top: 1rem;
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
