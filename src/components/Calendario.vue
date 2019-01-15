<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-flex>
            <v-card color="indigo">
              <v-card-title primary-title>
                <div>
                  <span class="white--text">Seleccione segun fecha y horarios sus consultas</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md text-xs-center>
      <v-data-table :headers="headers" :items="horariosdisponibles" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}({{ props.item.fecha}})</td>
          <td class="text-xs-right">
            <v-checkbox
              v-model="seleccion"
              :label="props.item.hora1"
              :value="props.item.hora1 + props.item.fecha"
            ></v-checkbox>
          </td>

          <td class="text-xs-right">
            <v-checkbox
              v-model="seleccion"
              :label="props.item.hora2"
              :value="props.item.hora2 + props.item.fecha"
            ></v-checkbox>
          </td>
        </template>
      </v-data-table>
      <v-alert :value="controlalert" type="error">Al menos debe seleccionar un campo para continuar</v-alert>
      <v-flex text-xs-center>
        <v-btn color="primary" dark v-on:click="submit()">Continuar
          <v-icon dark right>check_circle</v-icon>
        </v-btn>
      </v-flex>
      <p>{{seleccion}}</p>
      <p>{{fechas}}</p>
      <p>{{e1}}</p>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    fechas: {
      type: Object,
      required: true
    },
    e1: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      controlalert: false,
      seleccion: [],
      headers: [
        {
          text: "Dias",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "12:30 PM. - 13:30 PM.", value: "hora1" },
        { text: "13:30 PM. - 14:30 PM.", value: "hora2" }
      ],
      horariosdisponibles: [
        {
          value: false,
          fecha: "12-01-19",
          name: "Lunes",
          hora1: " 12:30 PM. - 13:30 PM.",
          hora2: " 13:30 PM. - 14:30 PM."
        },
        {
          value: false,
          fecha: "13-01-19",
          name: "Martes",
          hora1: " 12:30 PM. - 13:30 PM.",
          hora2: "13:30 PM"
        },
        {
          value: false,
          fecha: "14-01-19",
          name: "Miercoles",
          hora1: " 12:30 PM. - 13:30 PM.",
          hora2: " 13:30 PM. - 14:30 PM."
        },
        {
          value: false,
          fecha: "15-01-19",
          name: "Jueves",
          hora1: "12:30 PM",
          hora2: "13:30 PM"
        },
        {
          value: false,
          fecha: "16-01-19",
          name: "Viernes",
          hora1: "12:30 PM",
          hora2: "13:30 PM"
        }
      ]
    };
  },
  methods: {
    submit() {
      if (this.seleccion.length === 0) {
        this.controlalert = true;
      } else {
        this.e1 = 4;
        this.fechas.horario = this.seleccion;
        this.$emit("nuevofecha", this.fechas);
        this.$emit("submit", this.e1);
      }
    }
  }
};
</script>