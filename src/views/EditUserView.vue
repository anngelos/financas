<template>
  <div class="debts-container">
    <div class="flex">
      <div class="m-auto w-[40%]">
        <div>
          <div
            class="relative w-full flex justify-center items-center px-5 py-2.5 font-medium text-white bg-[#527853] rounded-md">
            <span class="pl-2 mx-1">Edição de Usuário</span>
          </div>
          <div class="mt-5 bg-white rounded-lg shadow">
            <div class="flex">
              <div class="flex-1 py-2 pl-5 overflow-hidden">
              </div>
            </div>
            <div class="px-5 pb-5">
              <input placeholder="Nome" type="text" id="name" name="name" v-model="updateUser.name"
                class="text-black placeholder-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
              <input placeholder="Apelido" type="text" id="nickname" name="nickname" v-model="updateUser.nickname"
                class="text-black placeholder-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
              <input placeholder="Senha" type="text" id="password" name="password" v-model="updateUser.password"
                class="text-black placeholder-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
              <input placeholder="Confirmação de Senha" type="text" id="confirmpassword" name="confirmpassword"
                v-model="updateUser.confirmpassword"
                class="text-black placeholder-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
              <input type="file" id="image" name="image" ref="fileInput" @change="uploadImage(event)"
                class="text-black placeholder-black w-full px-4 py-2.5 mt-2 ease-in-out transform rounded-lg bg-[#B6C4B6] focus:border-blueGray-500 focus:bg-[#B6C4B6] dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
            </div>
            <hr class="mt-4" />
            <div class="flex flex-row-reverse p-3">

              <div class="flex-initial pl-3 mt-8">
                <button type="button" @click="updateMyUser()"
                  class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white bg-[#527853] rounded-md active:scale-95 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                      opacity=".3"></path>
                    <path
                      d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z">
                    </path>
                  </svg>
                  <span class="pl-2 mx-1">Salvar Edição</span>
                </button>
              </div>

              <div class="flex-initial pl-3 mt-8">
                <button
                  type="button"
                  class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white bg-[#527853] rounded-md active:scale-95 ease-in-out"
                  @click="logUserOut()"
                >
                  <span class="pl-2 mx-1">Sair</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from "axios"

export default {
  name: 'EditUserView',
  data() {
    return {
      updateUser: {
        name: '',
        nickname: '',
        image: null,
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    }),
  },
  methods: {
    ...mapMutations({
      clearUser: 'clearUser',
    }),
    uploadImage() {
      const file = this.$refs.fileInput.files[0];
      this.updateUser.image = file;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.clearUser();
      this.$router.push("/");
      this.$swal.fire({
        icon: "warning",
        position: "top-end",
        text: "Adeus, volte sempre!",
        toast: true,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    },
    async updateMyUser() {
      const userUpdated = {
        name: this.updateUser.name,
        nickname: this.updateUser.nickname,
        password: this.updateUser.password,
        confirmpassword: this.updateUser.confirmpassword,
      }

      const token = localStorage.getItem('jwt');
      const userID = this.user.id;
      const url = `http://localhost:5000/users/edit/${userID}`;
      const config = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const response = await axios.patch(url, userUpdated, config);
        console.log('response: ', response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style></style>