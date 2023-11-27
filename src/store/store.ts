import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import testSlice from "../features/testSlice";

const rootReducer= combineReducers({
testSlice: testSlice,
})

const persistConfig = {
    key: 'root',
    storage
  }
  
  const persistedReducer = persistReducer( persistConfig, rootReducer );
  

 const store = configureStore({
    reducer:persistedReducer,
})

export default store