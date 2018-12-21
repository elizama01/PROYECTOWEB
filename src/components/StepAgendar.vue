<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Identificacion</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Seleccion de Profesional</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Busqueda de disponibilidad</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Confirmacion</v-stepper-step>
    </v-stepper-header>

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
        <router-view name="VistaIdentificacion"></router-view>

        <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

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
        <router-view name="VistaSeleccionProfesional"></router-view>
        <v-btn @click="e1 = 1">Atras</v-btn>
        <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

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
        <router-view name="VistaConfirmacionConsulta"></router-view>
        <v-btn @click="e1 = 3">Atras</v-btn>
        <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Identificacion</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Seleccion de Profesional</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Busqueda de disponibilidad</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Confirmacion</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 0,
      consulta: {
        rut: "",
        nombre: "",
        apellido: "",
        nacimient0: "",
        email: "",
        telefono: "",
        sexo: "",
        ciudad: "",
        comuna: "",
        direccion: "",
        profesional: {
          id: ``,
          nombre: "",
          edad: "",
          area: "",
          valor: ""
        },
        diaconsulta: {
          fechas: []
        }
      }
    };
  }
};
</script>