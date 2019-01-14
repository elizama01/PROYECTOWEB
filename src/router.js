import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Formulario from './components/Formulario.vue'
import Calendario from './components/Calendario.vue'
import AgendarConsulta from './views/AgendarConsulta.vue'
import StepAgendar from './components/StepAgendar.vue'
import InCumpleaños from './components/CalendarioCumpleaños.vue'
import SeleccionProfesional from './components/SeleccionProfesional.vue'
import BusquedaDisponibilidad from './components/BusquedaDisponibilidad.vue'
import ConfirmacionAgendar from './components/ConfirmacionAgendar.vue'
import SobreNosotros from './views/SobreNosotros.vue'
import Profesionales from './views/Profesionales.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            Principal: Home
        }
    }, {
        path: '/SobreNosotros',
        name: 'SobreNosotros',
        components: {

            Principal: SobreNosotros
        }
    },
    {
        path: '/AgendarConsulta',
        name: 'AgendarConsulta',
        components: {

            Principal: AgendarConsulta
        }, props:
        {
            Principal: true
        },
        children: [{
            path: '',
            components: {
                VistaStep: StepAgendar,
            }, props: {
                VistaStep: true
            },
            children: [{
                path: '',
                components: {
                    VistaIdentificacion: Formulario,
                    VistaSeleccionProfesional: SeleccionProfesional,
                    VistaBusquedaDisponibilidad: BusquedaDisponibilidad,
                    VistaConfirmacionConsulta: ConfirmacionAgendar

                },
                props: {
                    VistaIdentificacion: true,
                    VistaSeleccionProfesional: true,
                    VistaBusquedaDisponibilidad: true,
                    VistaConfirmacionConsulta: true
                },
                children: [{
                    path: '',
                    components: {
                        VistaCumpleaños: InCumpleaños,
                        VistaCalendarioDisponibilidad: Calendario

                    },
                    props: {
                        VistaCumpleaños: true,
                        VistaCalendarioDisponibilidad: true
                    },
                },]
            },]
        },]
    }, {
        path: '/Profesionales',
        name: 'Profesionales',
        components: {

            Principal: Profesionales
        }, props: { Principal: true }
    }

    ]
})