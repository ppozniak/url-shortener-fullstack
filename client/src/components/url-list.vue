<template>
  <div class="section">
    <h2>Recently shortened links:</h2>
    <ul class="list">
      <li class="item">
        <a class="link" href="#">
          URL 1
        </a>
      </li>
      <li class="item">
        <a class="link" href="#">
          URL 2
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UrlList",
  props: {}
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
