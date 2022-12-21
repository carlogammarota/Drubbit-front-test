<template>
  <div >
    <!-- {{ relatedProducts }} -->
    <vue-slick-carousel
          v-bind="settings"
          v-if="relatedProducts && relatedProducts.length" ref="sliderEl" :arrows="true"
        >
            <!-- <div>1</div> -->
            <div v-for="item in relatedProducts">
                <Card :product="item"></Card>
            </div>

          /> 
          <!-- <div v-for="item in 3">
            asd
          </div> -->
        </vue-slick-carousel>
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
                "arrows": true,
                "dots": false,
                "infinite": true,
                "centerMode": true,
                "centerPadding": "20px",
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "variableWidth": true
            }
        }
    },
    props: ['relatedProducts'],
    components: { VueSlickCarousel, Card },

  }
</script> 
<style>

.slick-initialized .slick-slide[data-v-e4caeaf8] {
    /* padding: 10px; */
}
.slick-slider{
     /* width: 96%;  */
     margin: auto;
}
</style>