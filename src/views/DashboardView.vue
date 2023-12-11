<template>
  <header class="header sticky top-0 bg-[#527853] shadow-md flex items-center justify-between px-8 py-02">
    <h1 class="w-3/12"></h1>
    <nav class="nav font-bold text-md">
      <ul class="flex items-center">
        <li class="p-4 text-white">
          <router-link class="cursor-pointer" to="/dashboard" exact>DÍVIDAS</router-link>
        </li>
        <li class="p-4 text-white">
          <router-link class="cursor-pointer" to="/create-debt">CRIAR DÍVIDA</router-link>
        </li>
      </ul>
    </nav>
    <div class="w-3/12 flex justify-center items-center ang">
      <div class="menu-item" @click="isOpen = !isOpen">
        <span class="cursor-pointer text-white mr-2 font-bold">{{ user.name }}</span>
        <transition name="fade" appear>
          <div class="sub-menu" v-if="isOpen">
            <div class="menu-item">
              <ul>
                <li>
                  <button type="button" class="w-full dditem">Editar Perfil</button>
                </li>
                <li>
                  <button type="button" class="w-full dditem" @click="logUserOut()">Sair</button>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <img class="w-10 h-10 p-1 rounded-full user" :src="user.image ? require(`../../backend/public/images/users/${this.user.image}`) : require(`../assets/profilepic.jpg`)">
    </div>
  </header>
  <router-view />
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import { RouterLink, RouterView } from "vue-router";
import { mapState } from "vuex"

export default {
  name: 'DashboardView',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      //this.user = decoded; FAZER AQUI A CHAMADA DO ITEM PRA MUDAR O ESTADO DE USER PRA RECEBER O JWT
      console.log(this.user)
    },
    logUserOut() {
      localStorage.removeItem("jwt");
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
    }
  },
  created() {
    this.getUserDetails();
  }
}
</script>

<style>
.img {
  width: 10%;
}

.router-link-exact-active {
  border-bottom: 2px solid white;
}

.menu-item .sub-menu {
  border: 1px solid #ccc;
  position: absolute;
  background-color: white;
  top: calc(38% + 18px);
  left: 85%;
  transform: translateX(-50%);
  width: 100px;
}

.dditem {
  margin-top: 5px;
}

.dditem:hover {
  cursor: pointer;
  background-color: #527853;
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
