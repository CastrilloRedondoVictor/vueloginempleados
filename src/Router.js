import { createRouter, createWebHistory } from 'vue-router';

import LoginComponent from './components/LoginComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';

const routes = [
    { 
        path: '/login', 
        component: LoginComponent, 
    },
    { 
        path: '/profile', 
        component: ProfileComponent, 
        meta: { requiresAuth: true }  // Guard para proteger la ruta solo para usuarios autenticados
    },
    { path: '/:pathMatch(.*)*', redirect: '/login' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Guardia de autenticación para manejar las rutas protegidas y de invitados
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Comprobar si hay token (indica autenticación)

    if (to.meta.requiresAuth && !isAuthenticated) {
        // Si la ruta requiere autenticación y no está autenticado, redirigir a login
        next('/login');
    } else {
        next(); // Continuar si no hay restricciones
    }
});

export default router;
