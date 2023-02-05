import { SET_VISIBILITY_FILTER } from "../actions/actions";

// Valor inicial para filterState, el estado del filtro.
let initialState = 'SHOW_ALL'

/**
 * Maneja el estado del filtro segun accion, aunque en este caso en particular, solo hay una accion.
 * @param {Array} state 
 * @param {action} action 
 * @returns filtro
 */
export const filterReducer = (state=initialState, action) => {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
  
    default:
      return state;
  }
}