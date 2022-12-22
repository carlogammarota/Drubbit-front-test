<template>
  <div class="bg-change">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <v-col  class="ma-auto carousel-styles bg-change" >
      <!-- <div class="grey lighten-5"> -->
        <v-col  lg="11" cols="12" class="ma-auto ProductSingle">
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
            <ProductSingle :product="product" :images="images" class="ProductSingle"></ProductSingle>
            </v-card>
          </v-col>
          <v-col
            :key="n"
            cols="12"
            md="4"
          >
            <v-card
              outlined
              tile
              class="pl-8 description"
            >
              <!-- One of three columns -->
              <!-- <v-breadcrumbs :items="items">
                <template v-slot:divider>
                  /
                </template>
              </v-breadcrumbs> -->
              <v-breadcrumbs :items="items" divider="/" id="breadcrumbs" class="pt-8">
                <template v-slot:item="{ item }">
                  <v-breadcrumbs-item class="pl-0 ml-0" :href="item.href" @click="showSelectedRow2(item)">
                    {{ item.text }}
                  </v-breadcrumbs-item>
                  </template>
              </v-breadcrumbs>
              <br>
              <v-list-item-title class="text-h5 mb-1 text-left pt-4 item-title" >
                <div>
                  {{ product.name }}
                </div>
                
              </v-list-item-title>
              <v-card-text class="pt-1 pl-0">
                <v-chip-group
                  v-model="selection"
                  active-class=" accent-4 white--text"
                  column
                >
                  <v-chip class="chip-style">SKU STA00307</v-chip>
                </v-chip-group>
              </v-card-text>
              <v-list-item-subtitle class="text-left drop_red text-break mark pb-8">STANLEY </v-list-item-subtitle>
              <!-- <v-list-item-subtitle class="text-left pl-4 drop_red text-break mark">STANLEY </v-list-item-subtitle> -->
              <v-card-text class="old-price text-left mt-0 py-0 pl-0">

                <span v-if="product.variants">
                  $ {{ product.variants[0].pvPrice.prevPrice    }}
                </span>
                


                </v-card-text>
                <v-card-title class="new-price-product mt-0 pt-0 pl-0">
                  <span v-if="product.variants">
                    $ {{ product.variants[0].pvPrice.price    }}
                  </span>
                  
                </v-card-title>
                <v-card-title class=" mt-0 pt-0">
                  
                  

                </v-card-title>
                <v-row no-gutters class="">
                  <v-col
                    :key="n"
                    cols="12"
                    sm="12"
                  >
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    <span class="material-icons float-left mr-4">check</span> <p class="text-sm-body-1  text-left">Disponible en stock </p>
                    </v-card>
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    <span class="material-icons float-left mr-4">credit_card</span> <p class="text-sm-body-1 text-left">Hasta 18 cuotas sin interés </p>
                    </v-card>
                  </v-col>
                </v-row>
                <v-divider light></v-divider>
                <div class="wrapper mt-4 ml-4">
                  <button class="btn btn--minus" @click="changeCounter('-1')" type="button" name="button">
                  -
                  </button>
                  <input class="quantity" type="text" name="name" :value="counter">
                  <button class="btn btn--plus" @click="changeCounter('1')" type="button" name="button">
                    +
                  </button>
                </div>
                
                <v-row no-gutters>
                <v-col
                  v-for="n in 1"
                  :key="n"
                  cols="12"
                  sm="12"
                >
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                    <p class="text-left last-available pl-2 ">Última disponible!</p>
                  </v-card>
                </v-col>
              </v-row>


            </v-card>
          </v-col>
        </v-row>
        </v-col>
      
      </v-col> 

    <br>
    <h2 class="font-weight-medium pb-2 font-4 text-uppercase text-decoration-underline font-weight-normal red--text">Tambien te puede interesar</h2>
    <CarouselVue :relatedProducts="relatedProducts"></CarouselVue>

  
  <!-- {{ product }}
  {{ relatedProducts }} -->

  </div>
</template>

<script>

import CarouselVue from '@/components/CarouselVue'
import ProductSingle from '@/components/Product'
import axios from 'axios'
import "vue-slick-carousel/dist/vue-slick-carousel.css";
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  // import 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css'
  // import 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css'
export default {
  name: 'HomeView',
  data(){
    return {
      product: {},
      relatedProducts: [],
      images: [],
      selection: '',
      items: [
        {
          text: 'Tienda',
          disabled: false,
          href: 'breadcrumbs_dashboard',
          
        },
        {
          text: 'Link 222',
          disabled: false,
          href: 'breadcrumbs_link_1',
          
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
          
        },
      ],
      counter: 1
    }
  },
  methods:{
    changeCounter(num){
				this.counter += +num
				console.log(this.counter)
				!isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;
            
			}
  },
  components: {
    CarouselVue,
    ProductSingle
    // HelloWorld
  },
  mounted(){
    axios
      .get('http://localhost:3000/product')
      .then(response => {
        
        // this.images.push(response.data.data.product.images[0].originalUrl)
        this.images = response.data.data.product.images
        this.items[1].text = response.data.data.product.categories[0].name
        this.items[2].text = response.data.data.product.categories[1].name
        console.log('this.images', this.images)
        this.product = response.data.data.product;
        this.relatedProducts = response.data.data.relatedProducts
      })
  }
}
</script>
<style>
/* Product Quantity */
.wrapper {
	 height: 40px;
	display: flex;
}
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
    width: 50px;
 
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
	border: 1px solid #E1E8EE;
}

.last-available {
  /* color: rgb(154, 154, 154); */
  color: rgb(37, 37, 37);
}

.btn {
	/* border: 1px solid black; */
  width: 50px;
  background-color: white;
/*   border-radius: 6px; */
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10%;
}
button:focus,
input:focus {
  outline:0;
}

.quantity {
  border: 1px solid black;
  border-radius: 10%;
  margin-left: 5px;
  margin-right: 5px;
  
}


.v-card {
  border: none !important;
}
.old-price {
    text-decoration: line-through;
}
.mark {
  color: #461e8c;
}
.chip-style {
  background-color: #f5f5f5 !important;
  padding: 5px;
  border-radius: 16%;
  font-size: 10px;
  margin-top: 0px;
}
.item-title {
  width: 60%;
}
.slick-arrow {
    display: none !important;
}
.theme--light ul li{
  list-style-type: none !important;
  float: left;
  padding-right: 0;
}
.theme--light ul li a{
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
}
.new-price-product {
  font-size: 30px;
}
.v-card #breadcrumbs{
  margin-left: -30px;
}
.description {
  /* background-color: red !important; */
  /* border: 1px solid black; */
  border-left: 0.5px solid #eee !important;

}
.ProductSingle {
  background: white;
  /* background: white; */
}

.bg-change {
  background: whitesmoke;
}

.slick-list{
  background: white;
}
.v-divider {
  opacity: 10%;
}
</style>
