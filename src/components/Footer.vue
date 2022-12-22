<template>
    <div class="footer">
        <v-row no-gutters class="mt-16">
            <v-col
                :key="n"
                cols="12"
                md="6"
            >
                    
                    

                <div class="text-left pl-10 pb-8">
                    <img src="https://materialesbasualdo.com.ar/uploads/configs/site_logo_1640802762678.png" alt=""></img>
                </div>
                <ul class="">
                    <li class="">
                       <div class="">
                            <span class="material-icons  mx-4">location_on</span>
                            <p class="contact-p">Rico 640, Dolores, Prov de Buenos Aires</p>
                       </div>
                    </li>
                    <li class="">
                        <div class="">
                            <span class="material-icons  mx-4 ">call</span>
                            <p class="contact-p">+5402245440664</p>
                        </div>
                    </li>
                    <li class="">
                        <span class="material-icons  mx-4">phone_iphone</span>
                        <p class="contact-p">+5492245600000</p>
                    </li>
                    <li class="">
                        <span class="material-icons  mx-4">email</span>
                        <p class="contact-p">ventas@materialesbasualdo.com.ar</p>
                    </li>
                </ul> 
                

            </v-col>
            <v-col
                :key="n"
                cols="12"
                sm="6"
            >
                
                <!-- UL -->
                    <v-row no-gutters class="pl-8">
                        <v-col
                            :key="n"
                            cols="12"
                            md="4"
                        >
                            <p class="white--text text-left title">Categorias</p>
                            <ul class="pl-0">
                                <li v-for="item in category" class="pl-0 ml-0" :key="item.id">
                                    <a href="#" class="white--text ">{{ item }}</a>
                                </li>

                            </ul>
                        </v-col>
                        <v-col
                            :key="n"
                            cols="12"
                            md="4"
                        >
                        <p class="white--text text-left title">Marcas</p>
                            <ul class="pl-0">
                                <li v-for="item in brands" class="pl-0 ml-0" :key="item.id">
                                    <a href="#" class="white--text ">{{ item }}</a>
                                </li>

                            </ul>
                        </v-col>
                        <v-col
                            :key="n"
                            cols="12"
                            md="4"
                        >
                        <p class="white--text text-left title">Institucional</p>
                            <ul class="pl-0">
                                <li v-for="item in institutional" class="pl-0 ml-0" :key="item.id">
                                    <a href="#" class="white--text ">{{ item }}</a>
                                </li>
                                <li class="mt-4">
                                    <img src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" width="25%" alt="">
                                </li>

                            </ul>
                        </v-col>
                    </v-row>
                
            </v-col>
        </v-row>
        <!-- <v-divider class="mx-2 divider lighten-2"></v-divider> -->
        <div class="spacing"></div>
        <div class="copy py-4">
            <p class="">Todos los derechos reservados © Basulado</p>
        </div>
        
        <!-- <v-divider class="mx-2  black" ></v-divider> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            category: [
                "Baños", 
                "Calefacción", 
                "Cocinas", 
                "Construcción En Seco", 
                "Electricidad", 
                "Griferías", 
                "Herramientas",
                "Hogar",
                "Instalaciones",
                "Jardín Y Aire Libre",
                "Materiales De Construccion",
                "Pinturas Y Revestimientos Plásticos",
                "Piscinas",
                "Pisos Y Revestimientos",
                "Sin Categoría",
                "Techos"
            ],
            brands: [
                "LOURDES",
                "SAN PIETRO PORCELANATO",
                "OBLAK",
                "ECOTERMO",
                "ALBERDI",
                "KLAUKOL",
                "TROMEN",
                "SCHNEIDER",
                "CERRO NEGRO",
                "GRIFERIA PEIRANO",
                "FERRUM"
            ],
            institutional: [
                "¿Como comprar?",
                "Preguntas frecuentes",
                "Terminos y condiciones "
            ]
        }
    },
}
</script>
<style>

.carousel-styles > div {
    width: 100%;
}
.slick-initialized{
    width: 100% !important;
}
.slick-slider {
    width: 100% !important;
}
ul {
    text-align: left;
    list-style: none;
    color: white;
}

 ul li a {
    text-decoration: none;
 }
.footer {
    background-color: #461e8c;
    border-top:solid 10px #f6303e;;
    /* min-height: 1000px;  */
    
    width: 100%;
}
.background {
    background-color: #461e8c !important;
}

.spacing {
    /* padding-bottom: 100px; */
    height: 200px;
}

.copy {
    /* padding-top: 100px; */
    color: white; 
    /* padding-bottom: 20px; */
    border-top: 1px solid #ccc;;
    border-bottom: 1px solid #ccc;;
    
    /* padding-top: 20px; */
}

.copy p {
    /* padding: 0 !important;    */
    margin-bottom: 0 !important;
}
/* 
.copy-text {
    margin-bottom: 20px;
} */

.contact-p{
    display: inline-block;
    vertical-align: middle;
}
</style>