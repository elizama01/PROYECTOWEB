<template>
  <div>
    <router-view
      name="VistaCalendarioDisponibilidad"
      v-bind:fechas="this.fechas"
      v-on:nuevofecha="updatefechas($event)"
      v-bind:e1="e1"
      v-on:submit="updatee1($event)"
    ></router-view>
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
    return {};
  },
  methods: {
    updatee1: function(updatee1) {
      this.e1 = updatee1;
      this.$emit("submit", this.e1);
    },
    updatefechas(dato) {
      this.fechas = dato;
      this.$emit("nuevofecha", this.fechas);
    }
  }
};
</script>

<style scoped>
</style>
