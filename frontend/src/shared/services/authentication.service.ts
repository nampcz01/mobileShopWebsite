import { AxiosResponse } from 'axios';
import { axiosUserInstance } from '../config/http.config';
import { IAuthentication } from '../types/authentication.type';
import { IUserRegister } from '../types/user.type';


class AuthService {
    authenticated(body: { username: string; password: string }): Promise<IAuthentication> {
        return axiosUserInstance.post('/users/login', body)
    }
    register(body: IUserRegister): Promise<AxiosResponse> {
        return axiosUserInstance.post('/users/register', body)
    }
    resetPassword(body: { username: string, currentPassword: string, newPassword: string }) {
        return axiosUserInstance.post('/users/changePassword', body)
    }
}

export const authService = new AuthService()
