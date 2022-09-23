<template>
  <MainPage></MainPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from "@/pages/MainPage.vue";

export default defineComponent({
  name: 'App',
  components: {MainPage},
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  @apply text-neutral-200;
}
</style>