<template>
    <div>
<v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
  <div>
     <v-container grid-list-md text-xs-center>
   <v-card color="primary">
       <v-card dark>
                <v-card-text class="px-0">Terapias Psicologica</v-card-text>
            </v-card>
       
    <v-layout row wrap>
     
        <v-flex xs4>
            <v-card dark color="accent">
                <v-img
          src="https://www.rizaldos.com/wp-content/uploads/2017/10/terapias-infancia-psicologia-online.jpg"
          aspect-ratio="2.75"
        ></v-img>
                <v-card-text class="px-0">Terapia para Niños, Adolescentes y para Padres</v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs4>
            <v-card dark color="accent">
              
                 <v-img
          src="https://www.rizaldos.com/wp-content/uploads/2017/10/coaching-desarrollo-personal-online.jpg"
          aspect-ratio="2.75"
        ></v-img>  <v-card-text class="px-0">Coaching, desarrollo personal, profesional y Deportivo</v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card dark color="accent">
                 <v-img
          src="https://www.rizaldos.com/wp-content/uploads/2017/10/terapias-ansiedad-depresion-pareja-online.jpg"
          aspect-ratio="2.75"
        ></v-img>
                <v-card-text class="px-0">Terapia para la Ansiedad, Depresión y para Parejas</v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs4>
            <v-card dark color="accent">
                <v-card-text class="px-0">Los niños y adolescentes también pueden sufrir angustia, depresión, tristeza, ira, miedo, celos. Esto a su vez se puede ver reflejado en problemas de conducta que impiden el desarrollo natural y adecuado. La infancia es la etapa en la que ponemos los cimientos que van a permitir el desarrollo de la personalidad para nuestra vida adulta. Por ello, los problemas que se presenten en esta etapa y no se resuelvan se suelen ir haciendo cada vez más fuertes y los vamos arrastrando a lo largo de nuestra vida adulta. Cuando los problemas no son pasajeros e incluso influyen en la personalidad, el niño o adolescente es recomendable acuda al psicólogo</v-card-text>
            </v-card>
        </v-flex>
         <v-flex xs4>
            <v-card dark color="accent">
                <v-card-text class="px-0">Para ir a la consulta del psicólogo no hace falta estar mal, simplemente hay que querer estar mejor. En Psicología sabemos que 80% del bienestar y del éxito en lo que hagamos en la vida depende de la fortaleza mental, por ello, a todas las personas que quieran mejorar, ya sea a nivel personal, deportivo o profesional, les enseñamos técnicas y estrategias psicológicas útiles para utilizar en la vida diaria y que le permitan explotar al máximo su potencial. Para ello durante las sesiones se utilizan muchas de las técnicas más eficaces de la psicología científica aplicándolas al desarrollo laboral, deportivo y de la vida.</v-card-text>
            </v-card>
        </v-flex>
         <v-flex xs4>
            <v-card dark color="accent">
                <v-card-text class="px-0">Los trastornos psicológicos se presentan en todas las etapas evolutivas del ser humano, siendo fundamental la salud psicológica para el bienestar en las relaciones sociales, las de pareja y familiares, el trabajo y el ocio. Un porcentaje significativo de personas padecen a lo largo de su vida, ansiedad, depresión o problemas de pareja, que influyen negativamente en las áreas personal, social, familiar, laboral. La terapia psicológica da las estrategias que se adaptan mejor a cada persona reduciendo significativamente o eliminando la ansiedad, la depresión o los problemas de pareja.</v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
   </v-card>
    
</v-container>
  </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://eldiariopositivo.com/wp-content/uploads/2015/07/5-Cosas-que-las-personas-felices-hacen-diferente.jpg'
          },
          {
            src: 'https://elsolweb.tv/wp-content/uploads/2016/11/Alegr%C3%ADa.jpg'
          },
          {
            src: 'https://previews.123rf.com/images/dolgachov/dolgachov1605/dolgachov160503090/57447577-vacaciones-de-verano-vacaciones-m%C3%BAsica-concepto-de-personas-felices-grupo-de-amigos-felices-tener-picnic.jpg'
          },
          {
            src: 'http://bion3.cl/home/wp-content/uploads/2016/11/personas-felices-3.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>


