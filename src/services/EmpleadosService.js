import Global from '@/Global';
import axios from 'axios';

export default class EmpleadosaxiosService {

  constructor() {}

  // Método para realizar el login y obtener el token de autenticación
  async login(userName, password) {
    const request = 'Auth/Login';
    try {
      const response = await axios.post(Global.apiEmpleados + request, {
        userName,
        password
      });
      return response.data;  // Esto devuelve el resultado de la llamada a quien invoque `login`
    } catch (error) {
      console.error("Error en el login:", error);
      throw error; // Esto permite manejar el error fuera del método
    }
  }

  // Método para obtener el token almacenado en Global
  getToken() {
    return Global.token;
  }

  isLogged() {
    let token = this.getToken();

    if(token == '') {
        return false;
    } else {
        return true;
    }
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
