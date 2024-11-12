<template>
    <div>
        <h1>PROFILE</h1>
        <button v-on:click="logout">LOG OUT</button>
        <router-link to="/login">LOGIN</router-link>
    </div>
</template>
<script>
import Global from '@/Global';
// import EmpleadosaxiosService from '../services/EmpleadosService'

// var empleadosService = new EmpleadosaxiosService();
    export default {
        name: 'ProfileComponent',
        methods: {
            logOut() {
                Global.token = ''
                this.$router.push('/login');
            }
        }
    }
</script>