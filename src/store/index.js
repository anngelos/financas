import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

export default createStore({
  state: {
    user: {},
    debts: []
  },
  getters: {},
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
    clearUser(state) {
      state.user = {};
    },
    setDebts(state, debts) {
      state.debts = debts
    }
  },
  actions: {
    async loginUser({ state, commit }, params) {
      try {
        let response = await axios.post("http://localhost:5000/users/login", params);
        console.log('resposta do login: ', response)
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          Swal.fire({
            icon: "success",
            position: "bottom-end",
            text: "Você foi logado com sucesso.",
            toast: true,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          return "success";
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          position: "top-end",
          text: error.response.data.message,
          toast: true,
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
        });
      }
    },
  },
});
