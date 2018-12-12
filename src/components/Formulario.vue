<template>
 <form align-center>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="Rut"
      :counter="10"
      :error-messages="errors.collect('Rut')"
      label="Rut"
      data-vv-name="Rut"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="name"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Nombre"
      data-vv-name="name"
      required
    ></v-text-field>
        <v-text-field
      v-validate="'required|max:10'"
      v-model="apellido"
      :counter="10"
      :error-messages="errors.collect('apellido')"
      label="Apellido"
      data-vv-name="apellido"
      required
    ></v-text-field>
   <router-view name="VistaCumpleaños"></router-view>
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="telefono"
      :counter="10"
      :error-messages="errors.collect('telefono')"
      label="Telefono"
      data-vv-name="telefono"
      required
    ></v-text-field>
    <v-select
      v-validate="'required'"
      :items="items"
      v-model="sexo"
      :error-messages="errors.collect('sexo')"
      label="Sexo"
      data-vv-name="sexo"
      required
    ></v-select>
    <v-checkbox
      v-validate="'required'"
      v-model="checkbox"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="Option"
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>
 <v-btn @click="submit">submit</v-btn>

    <v-btn @click="clear">clear</v-btn>
  </form>
  
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
export default {
  $_veeValidate: {
    validator: "new"
  },
  data: () => ({
    name: "",
    email: "",
    sexo: null,
    items: ["Masculino ", "Femenino"],
    checkbox: null,
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        name: {
          required: () => "Name can not be empty",
          max: "The name field may not be greater than 10 characters"
          // custom messages
        },
        sexo: {
          required: "Select field is required"
        }
      }
    }
  }),
  mounted() {
    this.$validator.localize("es", this.dictionary);
  },
  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$validator.reset();
    }
  }
};
</script>
