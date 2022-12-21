<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->

  <br>
  <h1>Tambien te puede interesar</h1>
  <CarouselVue :relatedProducts="relatedProducts"></CarouselVue>
  
  <!-- {{ product }}
  {{ relatedProducts }} -->

  </div>
</template>

<script>

import CarouselVue from '@/components/CarouselVue'
import axios from 'axios'

export default {
  name: 'HomeView',
  data(){
    return {
      product: {},
      relatedProducts: []
    }
  },
  components: {
    CarouselVue
    // HelloWorld
  },
  mounted(){
    axios
      .get('http://localhost:3000/product')
      .then(response => {
        console.log(response.data.data)
        this.product = response.data.data.product;
        this. relatedProducts = response.data.data.relatedProducts
      })
  }
}
</script>
