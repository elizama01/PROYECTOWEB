<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Sobre nosotros</h3>

            <div>
              Somos una organización de profesionales en psicología,
              con diferentes especialidades que decidieron agruparse en Clínica Psicológica.
              Esto nos permite intervenir de manera efectiva y acertada en servicios clínicos,
              organizacionales, y educativos.c
              <br>
            </div>
          </div>
        </v-card-title>
      </v-card>
      <v-card>
        <v-img
          src="https://www.urmenetagi.cl/sitio/wp-content/uploads/2016/05/perspectiva4.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <h3 class="headline mb-0">Vision</h3>

          <div>
            Realizar intervenciones que contribuyan al bienestar del individuo y el mejoramiento
            de las dinámicas empresariales.
            <br>
          </div>
        </v-card-title>
      </v-card>
      <v-card>
        <v-img
          src="https://respuestas.tips/wp-content/uploads/2018/09/100003844230.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <h3 class="headline mb-0">Mision</h3>

          <div>
            <br>Ser la mejor opción en servicios de psicología a nivel nacional
          </div>
        </v-card-title>

        <v-card-actions>
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
    return {};
  }
};
</script>

<style lang="">
</style>
