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
        setLoginData (state, action:PayloadAction<LoginData>){
            state.data = action.payload
        },
    },
});

export const {setLoginData} = loginDataSlice.actions;
export default loginDataSlice.reducer;