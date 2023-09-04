import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import {toast } from 'react-toastify';


export const loginUser = async(user, dispatch, navigate)=>{
    dispatch(loginStart())
    try {
        const res = await axios.post("http://localhost:9002/api/users/login", user);
        dispatch(loginSuccess(res.data));
        toast.success('Đăng nhập thành công')
        navigate("/")
        
    } catch (err) {
        dispatch(loginFailed())
        toast.error('Đăng nhập thất bại, hãy thử lại!')

    }
}

export const registerUser = async(registerUserInfo, dispatch, navigate)=>{
    dispatch(registerStart())
    try {
        await axios.post("http://localhost:9002/api/users/register", registerUserInfo);
        navigate("/login")
        dispatch(registerSuccess());
        toast.success('Đăng ký thành công')

    } catch (err) {
        dispatch(registerFailed())
        toast.error('Đăng ký thất bại, hãy thử lại!')

    }
}