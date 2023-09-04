export interface IUserRegister {
    name: string;
    password: string;
    email: string;
}

export interface IUserLogin{
    username: string;
    password: string;
}

export interface IInfoUserLogin {
    username: string;
    email: string;
    token: string;
    role: string;
}

export interface IUserChangePassword{
    username: string;
    currentPassword: string;
    newPassword: string;
}