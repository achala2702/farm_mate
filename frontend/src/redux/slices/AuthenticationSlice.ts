import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type LoginData =  {
    email:String;
    firstName:String;
    lastName:String;
}

type TLoginSlice = {
    data: LoginData|null
}

const initialState:TLoginSlice = {
    data:null
}

const loginDataSlice = createSlice({
    name:"userAuthentication",
    initialState,
    reducers: {
        setLoginData(state, action:PayloadAction<LoginData>){
            state.data = action.payload;
        },
        clearLoginData(state) {
            state.data = null;
        }
    },
});

export const {setLoginData, clearLoginData} = loginDataSlice.actions;
export default loginDataSlice.reducer;