<template>
   <v-app>
  <div id="app">
    <!-- hidden-sm-and-down -->
    <v-app-bar
        class="black hidden-md-and-up mobile-menu"
        elevation="4"
    >
      <span class="material-icons white--text mt-8 ml-2">menu</span>
      <p class="white--text pl-4 pt-12">RESPONSIVE MENU</p>
  </v-app-bar>
    <nav class="header hidden-sm-and-down">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="3"
        >
          <img class="mt-0 mx-4 mt-4" src="https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png" alt=""></img>
      
        </v-col>
        <v-col
          cols="12"
          md="2"
          @mouseover="hover = true"
            @mouseleave="hover = false"
        >
        <!-- <div class="text-left">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div> -->
        <div
            class="text-left dropdown mt-6" 
            >
            <v-btn
            class="ma-2 white ml-0"
            outlined
            color="indigo"
            
            
          >
          Categorías 
          </v-btn>
          <div class="dropdown-menu rounded-lg"  v-if="hover">
            <ul>
              <li class="py-2">
                <router-link to="/">Home</router-link>
              </li>
              <li class="py-2">
                <router-link to="/about">About</router-link>
              </li>
            </ul>
          </div>
        </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-text-field class="mt-5 rounded-lg">
          <v-icon
            slot="append"
            color="white"
          >
            search
          </v-icon>
        </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
        <div class="buttons mt-4 text-right py-2">
          <span class="material-icons white--text pr-4">person</span>
          <span class="material-icons white--text">shopping_cart</span>
        </div>
        </v-col>
      </v-row>
    </nav>
    <router-view/>
    <Footer></Footer>
  </div>
</v-app>
</template>
<script>
import Footer from '@/components/Footer'
export default {
  data() {
    return {
        hover: false
    }
  },
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

.header {
  min-width: 100%;
  min-height: 100px;
  background-color: #461e8c;
}

.mobile-menu {
  height: 100px !important;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/*  Dropdown by Carlo Gammarota */
.dropdown{
  position: relative;
}
.dropdown-menu {
  background-color: white;
  position: absolute;
  width: 250px;
  left: 0;
  z-index: 10000;
  border: 1px solid #461e8c;
  text-transform: uppercase;
  font-size: 20px;
  
  
}
.dropdown-menu li {
  color: black;
  cursor: pointer;
  padding-left: 10px;
}
.dropdown-menu li:hover {
  background-color: #461e8c;
  color: white;
}
.dropdown-menu ul {
  padding-top: 10px;
  padding-bottom: 10px;
  /* color: black; */
  padding-left: 0 !important;
}
.v-text-field__slot input {
  background-color: white;
  border-radius: 6px !important;
}
.v-text-field__slot :focus {
  width: 30px;
}
.v-text-field__slot {
  border-radius: 8px !important;
}
.v-input__slot {
  background: #9980ce;
  border: 1px solid antiquewhite;
}
.v-input__append-inner{
  cursor: pointer;
  padding-left: 20px !important;
  margin-left: -10px !important;
}
.v-input__append-inner .v-icon{
  padding-right: 10px !important;
}

.v-text-field__slot input:focus {
  outline: none;
}
.v-text-field__slot:focus {
    outline: none;
}
.buttons span {
  font-size: 50px;
  cursor: pointer;

}
.mobile-menu {
  height: 100px;
  background-color: #461e8c;
}
</style>
