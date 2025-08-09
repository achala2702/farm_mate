import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DiseaseDetectionReducer from "@/redux/slices/DiseaseDetectionSlice";
import YieldPredictionReducer from "@/redux/slices/YieldPredectionSlice";
import AuthenticationReducer from "@/redux/slices/AuthenticationSlice";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "auth",
  storage: storageSession,
}

const persistedAuthReducer = persistReducer(persistConfig, AuthenticationReducer);

const rootReducer = combineReducers({
  detectDisease: DiseaseDetectionReducer,
  predictYield: YieldPredictionReducer,
  userAuthentication: persistedAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({serializableCheck:false})
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
