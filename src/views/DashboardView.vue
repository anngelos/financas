<template>
  <div class="flex h-screen bg-gray-100">
    <div class="hidden md:flex flex-col w-64 bg-gray-800">
      <div class="flex items-center justify-center h-16 bg-gray-900">
        <span class="text-white font-bold uppercase">MENU</span>
      </div>
      <div class="flex flex-col flex-1 overflow-y-auto">
        <nav class="flex-1 px-2 py-4 bg-gray-800">
          <router-link to="/dashboard" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700" exact>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Dashboard
          </router-link>

          <router-link to="/create-debt" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-earmark-plus h-6 w-6 mr-2" viewBox="0 0 16 16">
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
            </svg>
            Criar Dívida
          </router-link>

          <router-link to="/edit-user" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill h-6 w-6 mr-2"
              viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            {{ user.name }}
          </router-link>
        </nav>
      </div>
    </div>
    <div class="flex flex-col flex-1 overflow-y-auto">
      <div class="p-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapMutations } from "vuex"

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
      this.$store.commit('setUser', decoded);
    },
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
  background-color: #374151;
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

.option-item {
  margin-top: 5px;
  border-bottom: none;
}

.option-item:hover {
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
