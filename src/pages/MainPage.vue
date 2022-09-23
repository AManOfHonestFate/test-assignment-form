<template>
  <div class="flex flex-col sm:flex-row mt-5 mx-5 sm:mx-10 lg:mx-20">
    <MyButton @click="openForm('Москва')" class="bg-blue-500 mb-3 sm:mb-0 sm:mr-5">Заказать в Москву</MyButton>
    <MyButton @click="openForm('Санкт-Петербург')" class="bg-teal-600">Заказать в Санкт-Петербург</MyButton>
  </div>
  <PopUp @hide-popup="closeForm()" v-if="popupVisible">
    <MyForm :chosen-city="chosenCity"></MyForm>
  </PopUp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from "@/components/MyButton.vue";
import PopUp from "@/components/PopUp.vue";
import MyForm from "@/components/MyForm.vue";

export default defineComponent({
  name: 'MainPage',
  components: {MyForm, PopUp, MyButton},
  data() {
    return {
      popupVisible: false,
      chosenCity: ''
    }
  },
  methods: {
    openForm(value = '') {
      this.chosenCity = value;
      this.popupVisible = true;
    },
    closeForm() {
      this.popupVisible = false;
    }
  }
});
</script>