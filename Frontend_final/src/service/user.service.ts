import axios from "axios"
import { IUserLogin, IUserRegister, IUserChangePassword } from "../types/user.type"

export const Login = async(userInfo : IUserLogin)=>{
    return await axios.post("localhost:9000/api/users/login", { ...userInfo }).catch((e) => { throw e.toJSON() });
}

export const Register = async(userInfoRegister : IUserRegister)=>{
    return await axios.post("localhost:9000/api/users/register", {...userInfoRegister}).catch((e) => { throw e.toJSON() });
}

export const ChangePassword = async(userInfoChangePassword: IUserChangePassword)=>{
    return await axios.post("localhost:9000/api/users/changePassword", {...userInfoChangePassword}).catch((e) => { throw e.toJSON() });
}