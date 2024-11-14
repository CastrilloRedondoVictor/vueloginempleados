<template>
    <div>
        <h1>PROFILE {{ profile }}</h1>
        <button v-on:click="logOut">LOG OUT</button>
        <router-link to="/login">LOGIN</router-link>
    </div>
</template>
<script>
import EmpleadosaxiosService from '../services/EmpleadosService'

var empleadosService = new EmpleadosaxiosService();
    export default {
        name: 'ProfileComponent',
        data() {
            return {
                profile: {}
            }
        },
        methods: {
            logOut() {
                localStorage.removeItem('authToken')
                this.$router.push('/login');
            },
            getProfile() {
                console.log(empleadosService.getPerfil())
                empleadosService.getPerfil().then(response => {
                    this.profile = response
                })
            }
        },
        mounted() {
            this.getProfile()
            console.log(localStorage.getItem('authToken'))
        }
    }
</script>