<template>
<!-- Padre de componentes , Vista en pasos controlados por continua -->
<v-stepper v-model="e1">
    <!-- header de step con los nombre y si se completa -->
    <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Identificacion</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Seleccion de Profesional</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">Busqueda de disponibilidad</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">Confirmacion</v-stepper-step>
    </v-stepper-header>
    <!-- Cada item y su contenido  -->
    <v-stepper-items>
        <v-stepper-content step="1">
            <v-flex xs12>
                <v-flex>
                    <v-card color="indigo">
                        <v-card-title primary-title>
                            <div>
                                <span class="white--text">Ingrese sus datos</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-flex>
            <!-- Llamado a al componente con routerlink -->

            <router-view name="VistaIdentificacion" v-on:submit="updatee1($event)" v-on:confirmarDatos="updatedatos($event)" v-bind:cliente="cliente" v-bind:e1="e1"></router-view>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <!-- Cada item y su contenido  -->
        <v-stepper-content step="2">
            <v-flex xs12>
                <v-flex>
                    <v-card color="indigo">
                        <v-card-title primary-title>
                            <div>
                                <span class="white--text">Seleccione su Profesional</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-flex>
            <router-view name="VistaSeleccionProfesional" v-bind:profesional="profesional" v-on:nuevoprofesional="updateprofesional($event)" v-bind:e1="e1" v-on:submit="updatee1($event)"></router-view>
            <v-btn @click="e1 = 1">Atras</v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <!-- Cada item y su contenido  -->
        <v-stepper-content step="3">
            <v-flex xs12>
                <v-flex>
                    <v-card color="indigo">
                        <v-card-title primary-title>
                            <div>
                                <span class="white--text">Busqueda de disponibilidad</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-flex>
            <!-- Llamado a al componente con routerlink -->
            <router-view name="VistaBusquedaDisponibilidad"></router-view>
            <v-btn @click="e1 = 2">Atras</v-btn>
            <v-btn color="primary" @click="e1 = 4">Continue</v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
            <v-flex xs12>
                <v-flex>
                    <v-card color="indigo">
                        <v-card-title primary-title>
                            <div>
                                <span class="white--text">Confirme su consulta Psicologica</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-flex>
            <!-- Llamado a al componente con routerlink -->
            <router-view name="VistaConfirmacionConsulta"></router-view>
            <v-btn @click="e1 = 3">Atras</v-btn>
            <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
    </v-stepper-items>
    <!-- footer de step con los nombre y si se completa -->
    <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Identificacion</v-stepper-step>

        <v-divider></v-divider>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">Busqueda de disponibilidad</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">Confirmacion</v-stepper-step>
    </v-stepper-header>
</v-stepper>
</template>

<script>
export default {
    // Datos del padre y de cada consulta para props
    data() {
        return {
            e1: 0,
            cliente: {
                Rut: '',
                name: '',
                apellido: '',
                nacimiento: null,
                email: '',
                ciudad: '',
                comuna: '',
                direccion: '',
                sexo: null
            },
            profesional: {
                id:'',
                nombre: '',
                edad: '',
                area: '',
                valor: '',
                imagen: ''

            },fechas:{
                dias:[]
            }


        };
    },
    methods: {
        updatee1: function (updatee1) {
            this.e1 = updatee1;
        },
        updatedatos: function (newdatos) {
            this.cliente = newdatos;
        },
        updateprofesional:function(newdatos){
this.profesional=newdatos;
        }

    }
};
</script>
