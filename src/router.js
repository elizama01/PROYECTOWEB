import Vue from 'vue'
import Router from 'vue-router'
import HelloWordl from './components/HelloWorld.vue'
import DataTable from './components/DataTable.vue'
import Formulario from './components/Formulario.vue'
import Calendario from './components/Calendario.vue'
import AgendarConsulta from './views/AgendarConsulta.vue'
import StepAgendar from './components/StepAgendar.vue'
import InCumpleaños from './components/CalendarioCumpleaños.vue'
import SeleccionProfesional from './components/SeleccionProfesional.vue'
import BusquedaDisponibilidad from './components/BusquedaDisponibilidad.vue'
import ConfirmacionAgendar from './components/ConfirmacionAgendar.vue'
import SobreNosotros from './views/SobreNosotros.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            components: {
                Principal: HelloWordl
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
            },
            children: [{
                path: '',
                components: {
                    VistaStep: StepAgendar,
                },
                children: [{
                    path: '',
                    components: {
                        VistaIdentificacion: Formulario,
                        VistaSeleccionProfesional: SeleccionProfesional,
                        VistaBusquedaDisponibilidad: BusquedaDisponibilidad,
                        VistaConfirmacionConsulta: ConfirmacionAgendar

                    },
                    children: [{
                        path: '',
                        components: {
                            VistaCumpleaños: InCumpleaños,
                            VistaCalendarioDisponibilidad: Calendario

                        }
                    }, ]
                }, ]
            }, ]
        }

    ]
})