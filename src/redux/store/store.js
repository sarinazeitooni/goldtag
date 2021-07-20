import rootReducer from "../reducer/combineReducer";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware,createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
const state= {};

const persistConfig = {
    key: "root",
    storage,
    blacklist:['comments']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer,
    state,
    composeWithDevTools(applyMiddleware(logger))
);

export const persistor = persistStore(store);
export default store;