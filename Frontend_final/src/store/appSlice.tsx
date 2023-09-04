import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
//import { deleteCookie } from 'cookies-next';
import Cookies from "js-cookie";

import { APP_SAVE_KEY } from "../utils/constants";
import { IInfoUserLogin } from "../types/user.type";


type APPSTATE = {
    user: IInfoUserLogin | undefined,
    isLogined: boolean,
}

const initialState: APPSTATE = {
    user: undefined,
    isLogined: false,
}
export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any | undefined>) => {
            state.user = action.payload
            state.isLogined = true
        },
        logout: (state) => {
            state.user = undefined
            state.isLogined = false
            Cookies.remove(APP_SAVE_KEY.TOKEN_KEY)
            Cookies.remove(APP_SAVE_KEY.LOGIN_STATUS)
        },
    }
}
)
export const { login, logout} = appSlice.actions
export default appSlice.reducer
