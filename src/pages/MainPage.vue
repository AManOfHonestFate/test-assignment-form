<template>
  <div class="flex flex-col sm:flex-row mt-5 mx-5 sm:mx-10 lg:mx-20">
    <MyButton @click="openForm(1)" class="bg-blue-500 mb-3 sm:mb-0 sm:mr-5">Заказать в Москву</MyButton>
    <MyButton @click="openForm(2)" class="bg-teal-600">Заказать в Санкт-Петербург</MyButton>
  </div>
  <PopUp @hide-popup="closeForm" v-if="popupVisible">
    <MyForm @hide-popup="closeForm" :chosen-city="chosenCity"></MyForm>
  </PopUp>
  <PopUp @hide-popup="closeResponse" v-if="responseVisible">
    <div class="text-gray-900 p-6" v-html="response"></div>
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
      responseVisible: false,
      chosenCity: 0
    }
  },
  methods: {
    openForm(value = 0) {
      this.chosenCity = value;
      this.popupVisible = true;
    },
    closeForm() {
      this.popupVisible = false;
    },
    closeResponse() {
      this.responseVisible = false;
    }
  },
  computed: {
    response() {
      return this.$store.state.res;
    }
  },
  watch: {
    response() {
      this.responseVisible = true;
    }
  }
});
</script>