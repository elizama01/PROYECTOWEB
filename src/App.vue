<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <router-link to="/">
          <v-list-tile @click>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Inicio</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/SobreNosotros">
          <v-list-tile @click>
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sobre Nosotros</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/Profesionales">
          <v-list-tile @click>
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nuestros Profesionales</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/AgendarConsulta">
          <v-list-tile @click>
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Agendar Consulta</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>NOMBRE DE LA CLINICA</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view name="Principal"></router-view>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>
