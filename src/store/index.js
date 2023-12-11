import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2';

export default createStore({
  state: {
    user: {},
  },
  getters: {
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
    clearUser(state) {
      state.user = {};
    }
  },
  actions: {
    async loginUser({state, commit}, params) {
      try {
        console.log(params)
        let response = await axios.post('http://localhost:5000/users/login', params);
        let token = response.data.token;
        console.log('o token: ', token)
        localStorage.setItem("jwt", token);
        if (token) {
          Swal.fire({
            icon: "success",
            position: "top-end",
            text: 'Você foi logado com sucesso.',
            toast: true,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          return 'success';
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
})
