import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    res: ''
  },
  getters: {
  },
  mutations: {
    setRes(state, value) {
      state.res = value;
    }
  },
  actions: {
    submitForm({commit}, req: {name: string, phone: string, email: string, city_id: number}) {
      axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', req)
          .then(res => commit('setRes', res.data));
    }
  },
})
