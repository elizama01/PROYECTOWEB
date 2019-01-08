<template>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
            <v-flex>
                <v-card color="indigo">
                    <v-card-title primary-title>
                        <div>
                            <span class="white--text">Agendado de Consulta Psicologica</span>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-flex>
        <v-flex xs12>
            <router-view name="VistaStep"></router-view>
        </v-flex>

        <v-flex xs12>
            <v-card color="indigo">
                <v-card-text class="px-0"></v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {};
</script>
