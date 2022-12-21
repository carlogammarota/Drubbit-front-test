<template>
  <div >
    <!-- {{ relatedProducts }} -->
    <v-col sm="9" class="ma-auto carousel-styles">
        <vue-slick-carousel
            :arrows="true"
            v-bind="settings"
            v-if="relatedProducts && relatedProducts.length" 
            ref="carousel"
            class=""
            
        >
        
            <!-- <div>1</div> -->
            <div v-for="item in relatedProducts">
                <Card :product="item"></Card>
            </div>

            
            <!-- <div v-for="item in relatedProducts">
                <Card :product="item"></Card>
            </div> -->
            <!-- <div v-for="item in relatedProducts">
                <Card :product="item"></Card>
            </div> -->

          /> 
          <!-- <div v-for="item in 3">
            asd
          </div> -->
          <div class="buttons-action">
           
          </div>
        </vue-slick-carousel>
        <button @click="showNext" class="next "><span class="material-icons buttons-action"> arrow_circle_right </span> </button>
            
            <button @click="showPrev" class="back "><span class="material-icons buttons-action"> arrow_circle_left </span> </button>
    </v-col>
    
  </div>
</template>
 
<script>

  import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import Card from '@/components/Card'
//   import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots

//   import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    data(){
        return {
            settings: {
                arrows: true,
                "dots": false   ,
                "infinite": true,
                "centerMode": false,
                "centerPadding": "20px",
                "slidesToShow": 3,
                "slidesToScroll": 4,
                "variableWidth": true,
                
            }
        }
    },
    props: ['relatedProducts'],
    components: { VueSlickCarousel, Card },
    methods: {
        showNext() {
            this.$refs.carousel.next()
        },
        showPrev() {
            this.$refs.carousel.prev()
        },
    }

  }
</script> 
<style>
.carousel-styles{
    position: relative;
}
.buttons-action{
    /* position: absolute; */
    /* height: 200px;
    width: 200px; */
    /* z-index: 100000;
    top: 50%; */
    font-size: 80px !important;
}
.next{

    right: 0;
    position: absolute;
    top: 45%;
    
    
}
.back{
    left: 0;
    position: absolute;
    top: 45%;
}
.slick-initialized .slick-slide[data-v-e4caeaf8] {
    padding: 10px; 
}
.slick-slider{
     width: 96%; 
     margin: auto;
}
.variable-width .slick-slide {
    width: 475px;
 }

 button.slick-prev:before, button.slick-next:before {
      background-color: red !important;
}


</style>