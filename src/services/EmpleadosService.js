import Global from '@/Global';
import axios from 'axios';

export default class EmpleadosaxiosService {

  constructor() {}

  // Método para realizar el login y obtener el token de autenticación
  async login(userName, password) {
    const request = 'api/Auth/Login';
    try {
      const response = await axios.post(Global.apiAuth + request, {
        userName,
        password
      });
      return response.data;  // Esto devuelve el resultado de la llamada a quien invoque `login`
    } catch (error) {
      console.error("Error en el login:", error);
      throw error; // Esto permite manejar el error fuera del método
    }
  }

  async getAlumnos(){
    const request = 'api/Alumnos/AlumnosToken'
    let token = this.getToken();
    

    try{
      // Usa await para esperar la respuesta de axios.get
    const response = await axios.get(Global.apiAlumnos + request, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
      console.error("Error en el login:", error);
      throw error; // Esto permite manejar el error fuera del método
    }
  }


  async postAlumno(alumno){
    const request = 'api/Alumnos/InsertAlumnoToken'
    let token = this.getToken();
    

    try{
      // Usa await para esperar la respuesta de axios.get
    const response = await axios.post(Global.apiAlumnos + request, JSON.stringify(alumno),  {
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
    });
    return response;
    } catch (error) {
      console.error("Error en el login:", error);
      throw error; // Esto permite manejar el error fuera del método
    }
  }



  // Método para obtener el token almacenado en Global
  getToken() {
    return localStorage.getItem('authToken');
  }

  isLogged() {
    return !!this.getToken();
  }

  // Método para obtener el perfil del empleado
  async getPerfil() {
    const token = this.getToken();
    if (!token) throw new Error('Token no disponible');

    const request = 'Empleados/PerfilEmpleado';
    try {
      const response = await axios.get(Global.apiEmpleados + request, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      throw error;
    }
  }

  // Método para obtener la lista de subordinados
  async getSubordinados() {
    const token = this.getToken();
    if (!token) throw new Error('Token no disponible');

    const request = 'Empleados/Subordinados';
    try {
      const response = await axios.get(Global.apiEmpleados + request, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener subordinados:", error);
      throw error;
    }
  }
}
