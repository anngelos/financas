<template>
  <div>
    <div class="relative min-h-screen  grid bg-black ">
      <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
        <div
          class="relative sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative login-image">
          <div class="absolute bg-black  opacity-25 inset-0 z-0"></div>
          <div class="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
            <div class="font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div class="max-w-xl w-full space-y-12">
            <div class="lg:text-left text-center">
              <div class="flex items-center justify-center">
                <div class="bg-black flex border border-gray-800 rounded-lg px-8 py-10">
                  <form class="flex flex-col space-y-8 mt-10">
                    <label class="font-bold text-lg text-white">Crie seu cadastro</label>

                    <label class="font-bold text-lg text-white">Nome</label>
                    <input type="text" placeholder="Digite seu nome" v-model="name"
                      class="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white">

                    <label class="font-bold text-lg text-white ">Apelido</label>
                    <input type="text" placeholder="Digite seu apelido" v-model="nickname"
                      class="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white">

                    <div class="flex">
                      <div class="w-full">
                        <label class="font-bold text-lg text-white">Senha</label>
                        <input type="password" placeholder="Digite seu nome" v-model="password"
                          class="w-full border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white">
                      </div>

                      <div class="ml-4 w-full">
                        <label class="font-bold text-lg text-white">Confirmaçao de Senha</label>
                        <input type="password" placeholder="Digite seu apelido" v-model="confirmpassword"
                          class="w-full border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white">
                      </div>
                    </div>

                    <button class="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" @click.prevent="createNewUser()">Cadastrar</button>
                    <router-link class="text-sm text-white text-center hover:text-indigo-600" to="/">Voltar</router-link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>





  <!-- <form class="h-screen md:flex">
    <div
      class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#527853] to-[#527853] i justify-around items-center hidden">
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">Finanças</h1>
        <p class="text-white mt-1">Não perca tempo, se cadastre e comece a usar agora mesmo.</p>
      </div>
      <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    </div>
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form class="bg-white">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Crie seu cadastro</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Venha fazer parte você também, vem...</p>
        <div class="flex items-center border border-gray-400 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
          <input class="pl-2 outline-none" type="text" id="name" name="name" v-model="name" placeholder="Nome" />
        </div>
        <div class="flex items-center border border-gray-400 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <input class="pl-2 outline-none" type="text" id="nickname" name="nickname" v-model="nickname" placeholder="Apelido" />
        </div>
        <div class="flex items-center border border-gray-400 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <input class="pl-2 outline-none" type="text" id="password" name="password" v-model="password" placeholder="Senha" />
        </div>
        <div class="flex items-center border border-gray-400 py-2 px-3 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <input class="pl-2 outline-none" type="text" id="confirmpassword" name="confirmpassword" v-model="confirmpassword" placeholder="Confirmar Senha" />
        </div>
        <button type="submit" class="block w-full bg-[#527853] mt-4 py-2 rounded-2xl text-white font-semibold mb-2" @click.prevent="createNewUser()">Cadastrar</button>
        <router-link class="text-sm ml-2 hover:text-blue-500 cursor-pointer" to="/">Voltar</router-link>
      </form>
    </div>
  </form>
  <ModalMessage /> -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: '',
      nickname: '',
      password: '',
      confirmpassword: ''
    };
  },
  methods: {
    async createNewUser() {
      const newUser = {
        name: this.name,
        nickname: this.nickname,
        password: this.password,
        confirmpassword: this.confirmpassword
      }

      try {
        const res = await axios.post('http://localhost:5000/users/register', newUser)

        this.$swal.fire({
          icon: "success",
          position: "top-end",
          html: `O usuário <b>${this.name}</b> foi criado com sucesso.`,
          toast: true,
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
        });
        this.$router.push("/");
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          position: "top-end",
          text: error.response.data.message,
          toast: true,
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
        });
      }
      this.name = ''
      this.nickname = ''
      this.password = ''
      this.confirmpassword = ''
    },

  },
};
</script>

<style>
.login-image {
  background-image: url('../assets/login.png');
}
</style>