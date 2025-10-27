import HomeComponent from './components/HomeComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MenuComponent from './components/MenuComponent.vue';
import CollatzComponent from './components/CollatzComponent.vue';
import CollatzFilters from './components/CollatzFilters.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';
import TablaMultiplicarSolucion from './components/TablaMultiplicarSolucion.vue';

//neceesitamos un array con las rutas de navegacion

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/menu", component: MenuComponent},
    {path: "/collatz", component: CollatzComponent},
    {path: "/collatzfilters", component: CollatzFilters},
    {path: "/tablaMultiplicar", component: TablaMultiplicar},
    {path: "/tablaSolucion", component: TablaMultiplicarSolucion}

]
//creamos una variable para el router indicando el tipo de navegacion y las rutas
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//la constante router es la que se usara en el fichero main.js debemos exportarla para que sea usada

export default router;