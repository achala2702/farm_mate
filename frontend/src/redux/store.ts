import { configureStore } from "@reduxjs/toolkit";
import DiseaseDetectionReducer from "@/redux/slices/DiseaseDetectionSlice";
import YieldPredictionReducer from "@/redux/slices/YieldPredectionSlice";
import AuthenticationReducer from "@/redux/slices/AuthenticationSlice";

export const store = configureStore({
  reducer: {
    detectDisease: DiseaseDetectionReducer,
    predictYield: YieldPredictionReducer,
    userAuthentication: AuthenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
