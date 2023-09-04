import axios from "axios"
import { IUserLogin, IUserRegister, IUserChangePassword } from "../types/user.type"

export const login = async(userInfo : any)=>{
    console.log(userInfo)
    return await axios.post("http://localhost:9002/api/users/login", { ...userInfo }).catch((e) => { throw e.toJSON() });
}

export const Register = async(userInfoRegister : IUserRegister)=>{
    return await axios.post("http://localhost:9002/api/users/register", {...userInfoRegister}).catch((e) => { throw e.toJSON() });
}

export const ChangePassword = async(userInfoChangePassword: IUserChangePassword)=>{
    return await axios.post("http://localhost:9002/api/users/changePassword", {...userInfoChangePassword}).catch((e) => { throw e.toJSON() });
}