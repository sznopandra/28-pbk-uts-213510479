
Berikut adalah contoh tampilan yang lebih menarik untuk codingan di atas:

<template>
  <div id="app">
    <div class="welcome-msg">
      <h1>Selamat Datang di Aplikasi To Do App </h1>
    </div>
    <div class="nav-links">
      <router-link to="/Home" class="router-link">Daftar Tugas</router-link>
      <router-link to="/About" class="router-link">Tentang Aplikasi</router-link>
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
  background-color: #f2f2f2;
}

.welcome-msg {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 48px;
  color: #333;
  text-shadow: 2px 2px #fff;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.router-link {
  margin: 0 20px;
  font-size: 24px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  padding-bottom: 10px;
}

.router-link:hover {
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  padding: 5px 20px;
  border-bottom: 2px solid #fff;
}

.router-link-active {
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  padding: 5px 20px;
  border-bottom: 2px solid #fff;
}

</style>
