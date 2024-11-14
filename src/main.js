import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';

<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
>>>>>>> 0e1f3ee419f4f970f7010b8610aa9c45e4f39250

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
