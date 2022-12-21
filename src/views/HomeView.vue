<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-container class="grey lighten-5">
      <v-col sm="9" class="ma-auto">
        <v-row no-gutters>
        <v-col
          :key="n"
          cols="12"
          md="8"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
        <v-col
          :key="n"
          cols="12"
          md="4"
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
      </v-col>
    
  </v-container> 

  <br>
  <h2 class="font-weight-medium pb-2 font-4 text-uppercase text-decoration-underline font-weight-bold red--text">Tambien te puede interesar</h2>
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
