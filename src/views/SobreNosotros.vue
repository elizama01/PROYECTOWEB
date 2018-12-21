<template>
<v-layout>

    <v-flex xs12 sm6 offset-sm3>

        <v-card> /*segmemnto predetermiado, sobre clinica*/

            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title> //titulo seccion

                <div>

                <h3 class="headline mb-0">Vision</h3> //cabezado de card
        

                    <div>Somos una organización de profesionales en psicología,
                        con diferentes especialidades que decidieron agruparse en Clínica Psicológica.
                        Esto nos permite intervenir de manera efectiva y acertada en servicios clínicos,
                        organizacionales, y educativos.c<br> </div>
                    </div>
            </v-card-title>

        </v-card>
        <v-card> //segmemnto predetermiado, mision

            <v-img src="https://www.urmenetagi.cl/sitio/wp-content/uploads/2016/05/perspectiva4.jpg" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title> //titulo seccion


                <h3 class="headline mb-0">Vision</h3> //cabezado de card
                

                <div>Realizar intervenciones que contribuyan al bienestar del individuo y el mejoramiento
                    de las dinámicas empresariales.<br></div>

            </v-card-title>

        </v-card>
        <v-card>

            <v-img src="https://respuestas.tips/wp-content/uploads/2018/09/100003844230.jpg" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title> //titulo seccion


                <h3 class="headline mb-0">Vision</h3> //cabezado de card

                <div><br>Ser la mejor opción en servicios de psicología a nivel nacional</div>

            </v-card-title>

            <v-card-actions> //funcionalidad que se tendra
             
                <v-btn flat color="orange">Inicio</v-btn> 
                <v-btn flat color="orange">Agendar</v-btn>

            </v-card-actions>

        </v-card>

    </v-flex>

</v-layout>
</template>

<script>
export default {

  


    data() {

        return {

            card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'

        }

    }

}
</script>

<style lang="">
  
</style>
