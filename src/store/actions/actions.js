// ID incremental para las tareas
let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * La acción de crear nueva tarea
 * @param {string} text 
 * @returns accion ADD_TODO
 */
export const addTodo = (text) => {
  return{
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

/**
 * La acción de cambiar el estado de la tarea
 * @param {number} id 
 * @returns accion TOGGLE_TODO
 */
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

/**
 * La acción de cambiar el filtro de visibilidad
 * @param {string} filter 
 * @returns accion SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { // causa y solucion de payload is undefined
      filter
    }
  }
}