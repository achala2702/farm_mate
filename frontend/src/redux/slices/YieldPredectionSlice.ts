import type { YieldResponseDto } from "@/actions/YieldFormAction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TYieldPredictionSlice = { yieldData: YieldResponseDto | null };

const initialState: TYieldPredictionSlice = {
  yieldData: null,
};

const YieldPredictionSlice = createSlice({
  name: "yieldPrediction",
  initialState,
  reducers: {
    setYieldData(state, action: PayloadAction<YieldResponseDto>) {
      state.yieldData = action.payload;
    },
  },
});

export const { setYieldData } = YieldPredictionSlice.actions;
export default YieldPredictionSlice.reducer;
