<template>
<!-- Vista calendario  -->
<div>
    <v-date-picker v-model="picker" :landscape="landscape" :allowed-dates="allowedDates" :reactive="reactive"></v-date-picker>
</div>
</template>

<script>
export default {
    data() {
        return {
            picker: new Date().toISOString().substr(0, 10),
            landscape: false,
            reactive: false
        };
    },
    //metodo para ocultar dias con consulta
    methods: {
        allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0
    }
};
</script>
