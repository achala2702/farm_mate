import { DiseaseResponseDto } from "@/actions/DIseaseDetectionAction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TDiseaseDetectionSlice = { diseaseData: DiseaseResponseDto | null };

const initialState: TDiseaseDetectionSlice = {
  diseaseData: null,
};

const DiseaseDetectionSlice = createSlice({
  name: "detectDisease",
  initialState,
  reducers: {
    setDiseaseData(state, action: PayloadAction<DiseaseResponseDto>) {
      state.diseaseData = action.payload;
    },
  },
});

export const { setDiseaseData } = DiseaseDetectionSlice.actions;
export default DiseaseDetectionSlice.reducer;
