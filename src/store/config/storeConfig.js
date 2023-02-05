import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from "../sagas/sagas";

/**
 * Crea el store (almacen) para el reducer 
 * @returns store creado
 */
export const createAppStore = () => {
  let store = createStore(rootReducer, composeWithDevTools())
  
  return store; 
}

export const createAsyncAppStore = () => {
  
  const sagaMiddleware = createSagaMiddleware();
  
  let store = createStore(

    rootReducer,
    compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
    
    );
  
    // Inicia el Watcher Saga
    sagaMiddleware.run(watcherSaga);

  return store; 
}