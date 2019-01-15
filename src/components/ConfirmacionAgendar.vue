<template>
  <div>
    <!-- Vista de datos para confirmar seleccion  -->
    <v-layout row>
      <v-flex xs12 sm7 offset-sm3>
        <v-card dark color="primary">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Datos personales</h3>
            </div>
          </v-card-title>
        </v-card>
        <v-card>
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{cliente.Rut}}</v-list-tile-title>
                <v-list-tile-sub-title>Rut</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{cliente.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>Nombre</v-list-tile-sub-title>
                  <v-list-tile-title>{{cliente.apellido}}</v-list-tile-title>
                  <v-list-tile-sub-title>Apellido</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{cliente.sexo}}</v-list-tile-title>
                <v-list-tile-sub-title>Sexo</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{cliente.nacimiento}}</v-list-tile-title>
                <v-list-tile-sub-title>Fecha de nacimiento</v-list-tile-sub-title>
                <v-list-tile-title>{{cliente.email}}</v-list-tile-title>
                <v-list-tile-sub-title>Correo electronico</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{cliente.ciudad}}</v-list-tile-title>
                <v-list-tile-sub-title>Ciudad</v-list-tile-sub-title>
                <v-list-tile-title>{{cliente.comuna}}</v-list-tile-title>
                <v-list-tile-sub-title>Comuna</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{cliente.direccion}}</v-list-tile-title>
                <v-list-tile-sub-title>Direccion</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
        <v-divider inset></v-divider>
        <v-card dark color="primary">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Datos de consulta</h3>
            </div>
          </v-card-title>
        </v-card>
        <v-card>
          <v-img :src="profesional.imagen" height="300px">
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile-sub-title>Fecha de Consultas</v-list-tile-sub-title>
            <v-list-tile v-for="item in fechas.horario" :key="item.id">
              <v-list-tile-content>
                <v-list-tile-title>{{item}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{profesional.nombre}}</v-list-tile-title>
                <v-list-tile-sub-title>Nombre Psicologo</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{profesional.edad}}</v-list-tile-title>
                <v-list-tile-sub-title>Edad</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{profesional.area}}</v-list-tile-title>
                <v-list-tile-sub-title>Area</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{profesional.valor}}</v-list-tile-title>
                <v-list-tile-sub-title>Valor de Consulta</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>

    <div>
      <v-layout row justify-center>
        <v-btn color="success" dark @click="dialog = true">Confirmar Consulta</v-btn>

        <v-dialog v-model="dialog" max-width="400">
          <v-card>
            <v-card-title class="headline">Esta seguro de que sus datos son correctos?</v-card-title>

            <v-card-text>Cuando seleccione "Confirmar" sus datos quedaran registrados en el sistema. ¿Seguro que quiere continuar?</v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" flat="flat" @click="dialog = false">Cancelar</v-btn>
              <router-link to="/">
                <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click="dialog = false"
                >Confirmar e ir a Pag.Inicio</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cliente: {
      type: Object,
      required: true
    },
    profesional: {
      type: Object,
      required: true
    },
    fechas: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
</style>
