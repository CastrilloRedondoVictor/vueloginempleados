import { createRouter, createWebHistory } from 'vue-router';

import LoginComponent from './components/LoginComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import Global from '@/Global';

const routes = [
    { 
        path: '/login', 
        component: LoginComponent, 
        meta: { requiresGuest: true }  // Guard para redirigir si el usuario ya está logueado
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
    const isAuthenticated = !!Global.token; // Comprobar si hay token (indica autenticación)

    if (to.meta.requiresAuth && !isAuthenticated) {
        // Si la ruta requiere autenticación y no está autenticado, redirigir a login
        next('/login');
    } else if (to.meta.requiresGuest && isAuthenticated) {
        // Si la ruta es solo para invitados (login) y el usuario ya está autenticado, redirigir a profile
        next('/profile');
    } else {
        next(); // Continuar si no hay restricciones
    }
});

export default router;
