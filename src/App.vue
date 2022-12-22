<template>
   <v-app>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <Footer></Footer>
  </div>
</v-app>
</template>
<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200;500;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200;800;900&display=swap');

#app {
  font-family: Ubuntu,sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Chivo Mono', monospace;
}

/* body {
  font-family: Ubuntu,sans-serif;
  line-height: 1.5;
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
