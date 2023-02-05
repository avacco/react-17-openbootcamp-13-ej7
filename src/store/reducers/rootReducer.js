import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
  {
    // Nombre del estado : Reducer que lo controla
    todosState: todosReducer,
    filterState: filterReducer,
    // Ejemplo asincrono (login)
    userState: userReducer

  }
);