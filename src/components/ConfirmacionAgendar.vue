<template>
<div>
    <!-- Vista de datos para confirmar seleccion  -->
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img src="https://www.altonivel.com.mx/wp-content/uploads/2018/02/presentacion-de-negocios-profesional.jpg" height="300px">
                    <v-layout column fill-height>
                        <v-card-title>
                            <v-spacer></v-spacer>

                            <v-btn dark icon class="mr-3">
                                <v-icon>edit</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-spacer></v-spacer>
                    </v-layout>
                </v-img>

                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">phone</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                            <v-list-tile-sub-title>Numero de telefono</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action></v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>$6789</v-list-tile-title>
                            <v-list-tile-sub-title>valor sesion</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">location_on</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>1400 Main Street</v-list-tile-title>
                            <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
    <v-btn color="success">Confirmar</v-btn>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
