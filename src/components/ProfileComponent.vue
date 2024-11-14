<template>
    <div>
<<<<<<< HEAD
        <h1>PROFILE</h1>
        <button v-on:click="logout">LOG OUT</button>
        <button v-on:click="postAlumno">AÑADIR</button>
        <h3 v-for="alumno in alumnos" :key="alumno.nombre">{{ alumno.nombre }}</h3>
=======
        <h1>PROFILE {{ profile }}</h1>
        <button v-on:click="logOut">LOG OUT</button>
        <router-link to="/login">LOGIN</router-link>
>>>>>>> 0e1f3ee419f4f970f7010b8610aa9c45e4f39250
    </div>
</template>
<script>
import EmpleadosaxiosService from '../services/EmpleadosService'
<<<<<<< HEAD

var empleadosService = new EmpleadosaxiosService()
=======
>>>>>>> 0e1f3ee419f4f970f7010b8610aa9c45e4f39250

var empleadosService = new EmpleadosaxiosService();
    export default {
        name: 'ProfileComponent',
        data() {
            return {
<<<<<<< HEAD
                alumnos: []
=======
                profile: {}
>>>>>>> 0e1f3ee419f4f970f7010b8610aa9c45e4f39250
            }
        },
        methods: {
            logOut() {
<<<<<<< HEAD
                localStorage.setItem('authToken', '')
                this.$router.push('/login');
            },
            getAlumnos() {
                empleadosService.getAlumnos().then(response => {
                    this.alumnos = response
                    console.log(response)
                })
            },
            postAlumno() {
                let alumno = {
                  "idAlumno": 3,
                  "nombre": "AAAAAAAAAA",
                  "apellidos": "Flores",
                  "imagen": "https://www.kmikze.com/1821-large_default/super-friki.jpg",
                  "activo": 1,
                  "idCurso": 0
                }

                empleadosService.postAlumno(alumno).then(response => {
                    console.log(response)
                    this.getAlumnos()
                })
            }
        },
        mounted(){
            this.getAlumnos()
=======
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
>>>>>>> 0e1f3ee419f4f970f7010b8610aa9c45e4f39250
        }
    }
</script>