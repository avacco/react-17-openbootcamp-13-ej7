// Tipos de accion asincrona
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; // Escuchado por Watcher Saga
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; // Despachado por Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; // Despachado por Worker Saga

/**
 * Prepara la peticion a realizar con el metodo, url de la api y los datos requeridos, en este caso email y password
 * @param {string} email 
 * @param {string} password 
 * @returns SUCCESS o FAILURE segun respuesta
 */
export const login = (email, password) => {
  return { 
    type: API_CALL_REQUEST,
    payload: { 
      request: {
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
        email: email,
        password: password
      }
      } 
      ,
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE
    }
  }
}
/**
 * Despachador de accion HttpRequest generico. 
 * Igual que antes, prepara la peticion a la api con el metodo, url y los datos requeridos, pero no los define con anterioridad.
 * @param {string} method 
 * @param {string} url 
 * @param {json} data 
 * @returns 
 */
export const httpRequest = (method, url, data) => {
  return { 
    type: API_CALL_REQUEST,
    payload: { 
      request: {
        method: method,
        url: url,
        data: data
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE
    }
  }
}