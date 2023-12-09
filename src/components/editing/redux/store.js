import {
    combineReducers,
    compose,
    legacy_createStore
  } from "redux";  
  
  import productReducer from './productReducer';
  
  const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
  function configureStore() {
    return legacy_createStore(
      combineReducers({
        product: productReducer,
      }),
      undefined,
      compose(
        ReactReduxDevTools,
      )
    );
  }

export default configureStore;