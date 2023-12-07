<template>
  <div class="main">
    <h1 class="dash-title">~~ DASHBOARD ~~</h1>
    <h1><b>Name:</b> {{ user.name }}</h1>
    <h1><b>Nickname:</b> {{ user.nickname }}</h1>
    <button type="button" class="block w-60 bg-[#527853] mt-4 py-2 rounded-2xl text-white font-semibold mb-2" @click="logUserOut()">Sair</button>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'DashboardView',
  data() {
    return {
      user: {}
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
    }
  },
  created() {
    this.getUserDetails();
  }
}
</script>

<style>
.main {
  margin: 400px auto;
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dash-title {
  font-size: 28px;
}
</style>
