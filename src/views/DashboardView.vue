<template>
  <div class="main">
    <h1 class="dash-title">~~ DASHBOARD ~~</h1>
    <p>Olá, user</p>
    <button @click="showAlert">Hello world</button>
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
