<template>
  <div >
    <!-- {{ relatedProducts }} -->
    <VueSlickCarousel :arrows="true" v-bind="settings">
       
            
            <div v-for="item in relatedProducts" :key="item.id" >
                
                {{item.name}}
            </div> 
            <!-- <div>1</div>
            <div>5</div>
            <div>2</div>
            <div>3</div> -->
     <!-- <div v-for="item in relatedProducts" :key="item.id" >
        <Card :product="item" class="CardStyles"></Card> 
    </div>  -->
    
    </VueSlickCarousel>
  </div>
</template>
 
<script>

  import VueSlickCarousel from 'vue-slick-carousel'
  import Card from '@/components/Card'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    data(){
        return {
            settings: {
                "arrows": true,
                "dots": false,
                // "infinite": true,
                // "centerMode": true,
                // "centerPadding": "20px",
                // "slidesToShow": 2,
                // "slidesToScroll": 1,
                // "variableWidth": true
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