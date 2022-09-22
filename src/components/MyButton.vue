<template>
  <button class="py-1 px-5 rounded shadow text-white">
    <slot></slot>
  </button>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "MyButton"
})
</script>