<template>
    <div>
        <h1>LOGIN</h1>
        <form @submit.prevent="login" class="col-md-6 mx-auto">
            <div class="form-group">
                <label for="marca">Usuario:</label>
                <input 
                    v-model="userName" 
                    type="text" 
                    class="form-control" 
                    id="userName" 
                    placeholder="Introduzca el USUARIO"
                    required
                />
            </div>
            <div class="form-group">
                <label for="modelo">Contraseña</label>
                <input 
                    v-model="password" 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    placeholder="Introduzca la CONTRASEÑA"
                    required
                />
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">LOGIN</button>
            <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script>
import Global from '@/Global';
import EmpleadosaxiosService from '../services/EmpleadosService';

const empleadosService = new EmpleadosaxiosService();

export default {
    name: 'LoginComponent',
    data() {
        return {
            userName: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await empleadosService.login(this.userName, this.password);
                Global.token = response.response;
                this.$router.push('/profile'); // Redirigir después del login exitoso
            } catch (error) {
                this.errorMessage = "Usuario o contraseña incorrectos";
                console.error("Error en el inicio de sesión:", error);
            }
        }
    }
};
</script>

