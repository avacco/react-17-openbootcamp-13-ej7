import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

// Estado inicial para las tareas (vacío)
let initialState = [];

/**
 * Maneja las acciones respecto a las tareas.
 * @param {Array} state 
 * @param {action} action 
 * @returns acciones correspondientes segun tipo entregado
 */
export const todosReducer = (state=initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      return [
        ...state, //toma parametros iniciales
        {
          id: action.payload.id, //luego los reemplaza con datos nuevos
          text: action.payload.text,
          completed: false
        }
      ]
    
    case TOGGLE_TODO:
      return state.map((todo) =>
      (todo.id === action.payload.id)
      ?
      {
        ...todo,
        completed: !todo.completed
      }
      :
      todo
    )

    

    default:
      return state;
  }
}