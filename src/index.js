import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

// Importa función de configuracion de AppStore
import { createAppStore, createAsyncAppStore } from './store/config/storeConfig'
import AppReduxSaga from './AppReduxSaga';

// Crea la AppStore
// let appStore = createAppStore();
let asyncAppStore = createAsyncAppStore();

ReactDOM.render(
  <Provider store={asyncAppStore}>
    <React.StrictMode>
       {/* <App /> */} {/* app proper, descomentar para probar */}
       <AppReduxSaga /> {/* pruebas con sagas */}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
