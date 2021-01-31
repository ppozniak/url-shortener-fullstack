<template>
  <div class="section">
    <h2>Recently shortened links:</h2>
    <div v-if="!urls.length">There are no recent shortened URLs</div>
    <ul class="list">
      <li v-for="url in urls" :key="url" class="item">
        <a class="link" :href="url">
          {{ url }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "UrlList",
  props: {
    urls: {
      type: Array as PropType<string[]>,
      default: [],
    },
  },
});
</script>

<style scoped>
.section {
  margin-top: 2rem;
  border-top: 1px dotted #ccc;
}

.list {
  padding: 0;
  list-style-type: none;
}

.item {
  border-top: 1px dotted #afafaf;
}

.item:last-of-type {
  border-bottom: 1px dotted #afafaf;
}

.link {
  width: 100%;
  display: inline-block;
  padding: 0.6rem 0;
}
</style>
