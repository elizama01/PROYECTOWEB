
<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm0>
      <v-card>
        
        
             <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title> 
          <div>
            <h3 class="headline mb-0"> Maximiliano</h3>
            <v-chip color="primary" text-color="white"> Ansiedad</v-chip> /*segmento de informacion
             <v-chip color="primary" text-color="white">Depresion</v-chip>  psiblle visita*//
              <v-chip color="primary" text-color="white">transtorno</v-chip>
              <v-chip color="primary" text-color="white"> Stress</v-chip>



            <div>La terapia sistémica se enfoca en ampliar la realidad en cuanto al dominio
                emocional del individuo, mediante un dialogo amable y empático.  Enfatizando 
                que la realidad no es única y que va a depender desde donde el se sitúe.

                El contexto es primordial, ya que mediante este,  el individuo le podrá dar una solución al problema manifestado. Por lo cual el terapeuta debe poner énfasis en este aspecto.

Otro punto importante es brindar un acompañamiento durante todo el proceso que permita el cambio de estructura mediante nuevas pautas y conteniendo los niveles de angustia que esto pueda generar, dejando atrás la disfuncionalidad.</div>
          </div>
        </v-card-title>

        <v-card-actions> funcionalidad que tendra
          <v-btn flat color="orange">Share</v-btn> //funcionalidad de botones
          <v-btn flat color="orange"></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>




<script>
    export default {
        
    }
</script>

<style scoped>
  v-img {
      float: left;
  }
</style>