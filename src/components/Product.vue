
<template>
    <div>
        <VueSlickCarousel
        ref="c2"
        :asNavFor="$refs.c1"
        :slidesToShow="8"
        :focusOnSelect="true"
        class="miniPreview "
        :touchMove="false"
        v-bind="miniSettings"
        >
        <div v-for="(item, index) in images" :key="index">
            <img :src="item.originalUrl" class="miniPreviewImg" alt=""></img>
        </div> 
        </VueSlickCarousel>
        <VueSlickCarousel
            ref="c1"
            :dots= false
            :asNavFor="$refs.c2"
            class="Preview"
            v-bind="settings"
            >
            <div v-for="(item, index) in images" :key="index">
                <img :src="item.originalUrl" alt="" class="mx-auto"/>
            </div> 
        </VueSlickCarousel>
    </div>
  </template>
  
  <script>
  import VueSlickCarousel from "vue-slick-carousel";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";  
  
  export default {
    data: () => ({
      items: [1, 2, 3, 4, 5],
      c1: undefined,
      c2: undefined,
        miniSettings: {
            infinite:false,
            "responsive": [
            {
            "breakpoint": 1024,
            "settings": {
                "slidesToShow": 5,
                "slidesToScroll": 3,
                "infinite": true,
                "dots": true
            }
            },
            {
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 2,
                "initialSlide": 2
            }
            },
            {
            "breakpoint": 480,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
            }
        ]
            
        },
        settings: {
            infinite:false,
            "responsive": [
            {
            "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "infinite": false,
                    "dots": true
                }
            },
        ]
            
        }
    }),
    mounted() {
      this.$nextTick(() => {
        this.c1 = this.$refs.c1
        this.c2 = this.$refs.c2
    })


    },
    props: ['product', 'images'],
    components: {
      VueSlickCarousel
    }
  };
  </script>
<style>

    v-card {
        border: none;
    }

    @media (max-width: 600px) {
        .Preview img{
            width: 50%;
            margin-top: 30%;
            margin-bottom: 20%;
        }
        }


    .Preview .slick-dots{
        bottom: 7px;
    }
    .miniPreviewImg{
        max-width: 100px;
        min-width: 50px;
    }

    .miniPreview .slick-track{
        margin-left: 0px;
    }

    .miniPreview .slick-slide {
        background: white;
    }


    .miniPreview img {
        cursor: pointer;
        opacity: 10%;
    }
    .miniPreview img {
        opacity: 100%;
    }
    .miniPreview .slick-slide div {
        /* width: auto !important; */
        /* border: 1px solid black */
        /* padding: 0;
        margin: 0; */
        
    }
    .miniPreview .slick-slide > div {
        /* float: left; */
        /* border: 1px solid black; */
        /* margin: 20px;
        border: 2px solid #461e8c;
        border-radius: 10%;
        margin-left: 0;
        margin-right: 0;
        padding: 2px; */
        /* padding: 0; */
        /* margin:10px; */
        
    }

    .miniPreview .slick-slide {
        width: none !important;
    }
    .miniPreview .slick-active {
        /* display: none; */
        /* cursor: pointer; */
        /* background-color: red; */
        /* border: 1px solid black !important; */
        /* border: 1px solid black */
    }
    .Preview .slick-dots {
        display: none !important;
    }
</style>