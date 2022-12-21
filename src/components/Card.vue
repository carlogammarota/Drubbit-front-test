<template>
  <v-card
    class="mx-auto product hover"
    max-width="280"
    
    
  >
  <div class="discount rounded-lg">
    <p class="discount-text">-{{ product.variants[0].pvPrice.discountPct    }}%</p>
  </div>
  <!-- {{ product }} -->
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    
   
    <v-img
        height="200"
        :src="product.mainImage.originalUrl"
        v-if="!hover"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    ></v-img>
    <v-img
        height="200"
        :src="product.secondImage.originalUrl"
        v-if="hover"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    ></v-img>
    

    <div>
        <!-- <v-img
      height="250"
      :src="product.secondImage.originalUrl"
        v-if="product.secondImage && hover"
    ></v-img> -->
    </div>

    <!-- <v-card-title>Cafe Badilico</v-card-title> -->

    <v-card-text class="old-price ">

        $ {{ product.variants[0].pvPrice.prevPrice    }}

      
    </v-card-text>
    <v-card-title class="new-price ">
        $ {{ product.variants[0].pvPrice.price    }}
    </v-card-title>

    <p class="title-product ">
        {{ product.name }}
    </p>

    <v-divider class="mx-2 divider lighten-2"></v-divider>

   

    <div class="text-xs-center py-2 mb-2">
      <!-- <v-btn
        color="" 
        text
      >
      
        <p class="font-weight-bold mt-4">
            Comprar 
        </p>
      </v-btn> -->
      

      <v-btn text class="">
        <v-icon>{{ cart }}</v-icon>
        <span class="buy-product ml-2">Comprar</span>
        </v-btn>
    </div>
  </v-card>

</template>
<script>
import { mdiCart } from '@mdi/js'; 

  export default {
    data: () => ({
    //   loading: false,
      selection: 1,
      hover: false,
      cart: mdiCart
    }),

    props: ['product'],

    methods: {
    //   reserve () {
    //     this.loading = true

    //     setTimeout(() => (this.loading = false), 2000)
    //   },
    },
    errorCaptured(err, vm, info) {
       // err: error trace
       // vm: component in which error occured
       // info: Vue specific error information such as lifecycle hooks, events etc.
       // TODO: Perform any custom logic or log to server
       // return false to stop the propagation of errors further to parent or global error 
       return false
    handler
  }
  }
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200;800;900&display=swap');
.discount-text {
    font-family: 'Chivo Mono', monospace !important;

    color: white;
    font-size: 30px;
    font-weight: 600;
    // padding-top: 8px;
    position: absolute;
    top: 2px;
    left: 1px;

}
.discount {
  
    background-color: #9980ce;
    height: 50px;
    width: 90px;
}
.slick-prev:before, .slick-next:before { 
    color:red !important;
}
.product{
    cursor: pointer;
    max-height: 500px;
}
.divider {
    // height: 0.2px;
    border-width: 0.3px !important;
    // background-color: red;
    border-color: #e0e0e0 !important;
    opacity: 0.5;
    margin: 0;
    // font-weight: 800;
    //    height: 50%;
}
.buy-product{
    text-transform: capitalize;
}
.old-price {
    text-align: left;
    color: #9e9e9e !important;
    padding-bottom: 0 !important;
    text-decoration: line-through;
}

.title-product {
    text-align: left;
    padding: 18px;
    padding-top:0;
    min-height: 90px;
}
.new-price {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
</style>
