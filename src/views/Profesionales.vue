<template>
<v-container fluid grid-list-md>
    <!--llamada de iterador de datos  -->
    <v-data-iterator :items="items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" hide-actions row wrap>
        <!-- muestra imagen y nombre de profesional -->
        <v-flex xs12 sm10 offset-sm0  slot="item" slot-scope="props">
           <v-card >
            <v-img :src="props.item.imagen" aspect-ratio="2.75"></v-img>

            <v-card-title  primary-title>
                <div>
                    <h3 class="headline mb-0">{{props.item.nombre}}</h3>
                    <v-chip color="primary" text-color="white">{{props.item.area}}</v-chip>
                   

                    <div>
                        {{props.item.info}}
                         </div>
                </div>
            </v-card-title>

            <v-card-actions>
                <router-link to="/AgendarConsulta"> <v-btn flat color="orange">Agendar Hora</v-btn>
               </router-link>
               
            </v-card-actions>
        </v-card>
        </v-flex>
    </v-data-iterator>
</v-container>

</template>

<script>
export default {
  data: () => ({
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4
        },
        //items de profesional
     items:[{
imagen:"https://cdn.vuetifyjs.com/images/cards/desert.jpg",
nombre:"Maximiliano",
info:"ESTA ES LA INFOMACION DE PROFESIONAL",
area:"Ansiedad"
   }],
    })
    
};
</script>

<style scoped>
v-img {
    float: left;
}
</style>
