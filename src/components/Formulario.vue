<template>
<!-- Formulario de ingreso datos-->
<form align-center>
    <!-- Input Rut -->
    <v-text-field v-validate="'required|max:10'" v-model="Rut" :counter="10" :error-messages="errors.collect('Rut')" label="Rut" data-vv-name="Rut" required></v-text-field>
    <!-- Input nombre -->
    <v-text-field v-validate="'required|max:10'" v-model="name" :counter="10" :error-messages="errors.collect('name')" label="Nombre" data-vv-name="name" required></v-text-field>
    <!-- Input apellido -->
    <v-text-field v-validate="'required|max:10'" v-model="apellido" :counter="10" :error-messages="errors.collect('apellido')" label="Apellido" data-vv-name="apellido" required></v-text-field>
    <!-- Input email -->
    <router-view name="VistaCumpleaños"></router-view>
    <v-text-field v-validate="'required|email'" v-model="email" :error-messages="errors.collect('email')" label="E-mail" data-vv-name="email" required></v-text-field>
    <!-- Input telefono -->
    <v-text-field v-validate="'required|max:10'" v-model="telefono" :counter="10" :error-messages="errors.collect('telefono')" label="Telefono" data-vv-name="telefono" required></v-text-field>
    <!-- Selector  de sexo usuario -->
    <v-select v-validate="'required'" :items="items" v-model="sexo" :error-messages="errors.collect('sexo')" label="Sexo" data-vv-name="sexo" required></v-select>
    <!-- Input ciudad -->
    <v-text-field v-validate="'required|max:10'" v-model="ciudad" :counter="10" :error-messages="errors.collect('ciudad')" label="Ciudad" data-vv-name="ciudad" required></v-text-field>
    <!-- Input comuna -->
    <v-text-field v-validate="'required|max:10'" v-model="comuna" :counter="10" :error-messages="errors.collect('comuna')" label="Comuna" data-vv-name="comuna" required></v-text-field>
    <!-- Input direccion -->
    <v-text-field v-validate="'required|max:10'" v-model="direccion" :counter="10" :error-messages="errors.collect('direccion')" label="Direccion" data-vv-name="direccion" required></v-text-field>
</form>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
export default {
    //LLama a pacage de validacion
    $_veeValidate: {
        validator: "new"
    },
    //props para coneccion con SteAgenar
    props: {},
    //Datos pasiente
    data: () => ({
        props: [],
        name: "",
        email: "",
        ciudad: "",
        comuna: "",
        direccion: "",
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
        //metodo enviar formulario
        submit() {
            this.$validator.validateAll();
        },
        //medoto Limpiar formulario
        clear() {
            this.name = "";
            this.email = "";
            this.ciudad = "";
            this.comuna = "";
            this.direccion = "";
            this.select = null;
            this.$validator.reset();
        }
    }
};
</script>
