<template>
  <div class="m-6">
    <h2 class="text-gray-900 mb-6">Заказать звонок</h2>
    <form class="text-gray-700 grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
      <label class="input-el">
        Имя*
        <input v-model="name" class="input" required type="text" name="name" placeholder="Иван Иванов"/>
      </label>
      <label class="input-el">
        Телефон*
        <input :value="maskedTel" @keydown.prevent="setTel($event)" class="input caret-transparent" required type="tel" name="tel" placeholder="+7 (___) ___-__-__"/>
      </label>
      <label class="input-el">
        Email*
        <input v-model="email" class="input" required type="email" name="email" placeholder="you@example.com"/>
      </label>
      <label class="input-el sm:col-span-2 lg:col-span-1">
        Город*
        <select v-model="city" class="input flex-grow" required>
          <option v-for="option in options" :key="option.id">
            {{ option.name }}
          </option>
        </select>
      </label>
      <MyButton class="bg-green-600 self-end lg:col-start-4 lg:col-end-4">Отправить</MyButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "@/components/MyButton.vue";

export default defineComponent({
  name: "MyForm",
  components: {MyButton},
  props: {
    chosenCity: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      telLength: 10,
      name: '',
      tel: [] as string[],
      email: '',
      city: this.chosenCity,
      options: [
        {
          id: 1,
          name: "Москва"
        },
        {
          id: 2,
          name: "Санкт-Петербург"
        },
        {
          id: 3,
          name: "Казань"
        }
      ]
    }
  },
  computed: {
    maskedTel(): string {
      let tel = this.tel.slice();
      tel = tel.concat('_'.repeat(this.telLength - tel.length).split(''));
      let maskedTel = `+7 (${tel[0] + tel[1] + tel[2]})  ${tel[3] + tel[4] + tel[5]}-${tel[6] + tel[7]}-${tel[8] + tel[9]}`;
      return maskedTel;
    }
  },
  methods: {
    setTel(event: KeyboardEvent) {
      const key = event.key;
      if (key === 'Backspace') {
        this.tel.pop();
      }
      if (key.length === 1 && key >= '0' && key <='9' && this.tel.length < this.telLength) {
        this.tel.push(key);
      }
    }
  }
});
</script>

<style scoped>
.input-el {
  @apply flex flex-col;
}

.input {
  @apply rounded shadow-sm border border-gray-300 py-1 px-3;
}
</style>