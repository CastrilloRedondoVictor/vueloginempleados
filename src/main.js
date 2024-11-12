import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';

// Crear la aplicación
const app = createApp(App);

// Definir métodos globales
// app.config.globalProperties.$filters = {
//     esPar(num) {
//         if(num % 2 == 0){
//             return `<span style='color: green'>${num}</span>`
//         } else {
//             return `<span style='color: red'>${num}</span>`
//         }
//     },
//     getOperacion(i, num) {
//         return `${num} * ${i}`
//     },
//     getResultado(i, num){
//         return num * i
//     }
// };

// Usar el router
app.use(router);

// Montar la aplicación
app.mount('#app');
