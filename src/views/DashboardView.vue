<template>
  <div class="main" v-if="user">
    <h1 class="dash-title">~~ DASHBOARD ~~</h1>
    <h1><b>Name:</b> {{ user.name }}</h1>
    <h1><b>Nickname:</b> {{ user.nickname }}</h1>
  </div>

  <div class="main" v-else>
    <H1>OLÁ USUARIO INEXISTENTE</H1>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
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
