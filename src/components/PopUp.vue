<template>
  <div @click="hidePopup" class="flex absolute top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-75">
    <div @click.stop class="m-auto bg-white rounded-md shadow-xl">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PopUp",
  emits: ['hide-popup'],
  methods: {
    hidePopup() {
      this.$emit('hide-popup');
    }
  }
})
</script>