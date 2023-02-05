import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';

// Watcher Saga
// Escucha las acciones de API_CALL_REQUEST

// Las funciones con asterisco son funciones generadoras, es decir, que no necesitan "terminar", se ejecutan en paralelo
export function* watcherSaga() {
  // Escucha la ultima accion y empieza una Worker Saga
  yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// Worker Saga
// Es llamado desde Watcher Saga, se encarga del Login y despacha una acción (SUCCESS o FAILURE).
export function* workerSaga(action) {
  try {
    const response = yield call(fetchHttp(action.payload.request))
    
    // Obtiene el token de la respuesta
    const token = response.data.token;
    yield put({
      type: action.payload.okAction, // API_CALL_SUCCESS
      payload: {
        token: token
      }
    })

  } catch (error) {
    yield put({
      type: action.payload.failAction, // API_CALL_FAILURE
      payload: {
        error: error
      }
    })
  }
}

function fetchHttp(request) {
  return function() {
    return(axios(request));
  }
}