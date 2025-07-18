import { configureStore } from "@reduxjs/toolkit";
import DiseaseDetectionReducer from "@/redux/slices/DiseaseDetectionSlice";
import YieldPredictionReducer from "@/redux/slices/YieldPredectionSlice";

export const store = configureStore({
  reducer: {
    detectDisease: DiseaseDetectionReducer,
    predictYield: YieldPredictionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
