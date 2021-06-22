import { combineReducers, createStore, applyMiddleware } from "redux";
import { Store } from "redux";
import thunk from 'redux-thunk';
import { AppState } from "./data.d";

import globalReducer from "./reducers/global.reducer";

const rootReducer = combineReducers<AppState>({
  global: globalReducer,
});

function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}

const storeData = configureStore();

export default storeData;
