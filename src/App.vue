<template>
  <div id="app">
    <div class="welcome-msg">
      <h1>Selamat Datang di Website Kami</h1>
    </div>
    <div class="nav-links">
      <router-link to="/Home">Home</router-link>
      <router-link to="/About">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.welcome-msg {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 36px;
  color: #333;
  text-shadow: 1px 1px #fff;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.router-link {
  margin: 0 10px;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.router-link:hover {
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  padding: 5px 10px;
}

</style>
