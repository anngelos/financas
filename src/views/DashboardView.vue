<template>
  <header class="header sticky top-0 bg-[#527853] shadow-md flex items-center justify-between px-8 py-02">
    <h1 class="w-3/12"></h1>
    <nav class="nav font-semibold text-lg">
      <ul class="flex items-center">
        <li class="p-4 border-b-2 border-white border-opacity-0 text-white hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
          <a href="">Dívidas</a>
        </li>
        <li class="p-4 border-b-2 border-white border-opacity-0 text-white hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
          <a href="">Criar dívida</a>
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
                  <li class="dditem">Editar Perfil</li>
                  <li class="dditem">
                    <button type="button" @click="logUserOut()">Sair</button>
                  </li>
                </ul>
              </div>
            </div>
          </transition>
      </div>
      <img class="w-10 h-10 p-1 rounded-full user" :src="user.image ? require(`../../backend/public/images/users/${this.user.image}`) : require(`../assets/profilepic.jpg`)">
    </div>
  </header>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'DashboardView',
  data() {
    return {
      user: {},
      isOpen: false
    }
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
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
