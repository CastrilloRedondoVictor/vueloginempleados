<template>
    <div>
        <h1>PROFILE</h1>
        <button v-on:click="logOut">LOG OUT</button>
        <button v-on:click="postAlumno">AÑADIR</button>
        <h3 v-for="alumno in alumnos" :key="alumno.nombre">{{ alumno.nombre }}</h3>
    </div>
</template>
<script>
import EmpleadosaxiosService from '../services/EmpleadosService'

var empleadosService = new EmpleadosaxiosService()
    export default {
        name: 'ProfileComponent',
        data() {
            return {
                alumnos: []
            }
        },
        methods: {
            logOut() {
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
        }
    }
</script>