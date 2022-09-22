<template>
  <div class="flex flex-col sm:flex-row mt-5 mx-5 sm:mx-10 lg:mx-20">
    <MyButton @click="setPopup(true)" class="bg-blue-500 mb-3 sm:mb-0 sm:mr-5">Заказать в Москву</MyButton>
    <MyButton @click="setPopup(true)" class="bg-teal-600">Заказать в Санкт-Петербург</MyButton>
  </div>
  <PopUp @hide-popup="setPopup(false)" v-show="popupVisible"></PopUp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from "@/components/MyButton.vue";
import PopUp from "@/components/PopUp.vue";

export default defineComponent({
  name: 'MainPage',
  components: {PopUp, MyButton},
  data() {
    return {
      popupVisible: false,
    }
  },
  methods: {
    setPopup(value: boolean) {
      this.popupVisible = value;
    }
  }
});
</script>