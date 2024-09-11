import { createWebHistory, createRouter } from 'vue-router'
import { routes } from 'vue-router/auto-routes'


console.log(routes)

// const routes = [
//   { path: '/', component: HomeView },
//   { path: '/about', component: AboutView },
//   { path: '/oferta', component: OfertaView },
//   { path: '/oferta/prawo-rodzinne', component: prawoRodzinne},
//   { path: '/oferta/prawo-majatkowe', component: prawoMajatkowe}
// ]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0 };
    }
  }
})

export default router