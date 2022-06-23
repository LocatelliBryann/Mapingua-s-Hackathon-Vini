import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import telaInicial from "../views/register/telaInicial.vue";
import cadastro from "../views/register/Cadastro.vue";
import pagina1 from "../views/register/Pagina1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('./blank.vue'),
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      }
    ]
    
  },
  {
    path: "/telaInicial",
    name: "telaInicial",
    component: telaInicial,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: cadastro,
  },
  {
    path: "/pagina1",
    name: "pagina1",
    component: pagina1,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
