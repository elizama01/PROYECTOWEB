<template>
<!-- contenedor de vista para cada profesional  -->
<v-container fluid grid-list-md>
    <!--llamada de iterador de datos  -->
    <v-data-iterator :items="items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" hide-actions row wrap>
        <!-- muestra imagen y nombre de profesional -->
        <v-flex slot="item" slot-scope="props" xs12 sm5 md8 lg11 text-xs-center>
            <v-card>
                <!-- llamado a imagen de profesional -->
                <v-avatar :tile="tile" :size="400" color="grey lighten-4">
                    <img :src="props.item.imagen" alt="avatar">
          </v-avatar>
                    <!--  vista de nombre -->
                    <v-card-title class="subheading font-weight-bold">
                        {{ props.item.nombre }}
                        <v-flex xs2 sm8 text-xs-center>
                            <v-btn color="primary" dark>Escoger
                                <v-icon dark right>check_circle</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <!-- llamado a dato edad -->
                    <v-list dense>
                        <v-list-tile>
                            <v-list-tile-content>Edad:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.edad}}</v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <!-- llamado a dato area -->
                        <v-list-tile>
                            <v-list-tile-content>Area de epecializacion:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.area }}</v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <!-- llamado a dato valor -->
                        <v-list-tile>
                            <v-list-tile-content>Valor Sesion:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.valor }}</v-list-tile-content>
                        </v-list-tile>
                        <v-divider></v-divider>
                    </v-list>
            </v-card>
        </v-flex>
    </v-data-iterator>
</v-container>
</template>

<script>
export default {
    //creacion de matriz para iterador de data
    data: () => ({
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4
        },
        //items de profesional
        items: [{
                //propiedades profesional
                value: false,
                nombre: "Maximiliano Toloza",
                edad: "40 Años",
                area: "Adulto,niños",
                valor: "$25.000",
                imagen: "https://www.altonivel.com.mx/wp-content/uploads/2018/02/presentacion-de-negocios-profesional.jpg"
            },
            {
                value: false,
                nombre: "Maximiliano Toloza",
                edad: "40 Años",
                area: "Adulto,niños",
                valor: "$25.000",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40o7KUWJt1pUoFDL7VmOrTKrdTCkP0DnJpS703-CGsoDmgIvL"
            }
        ]
    })
};
</script>
