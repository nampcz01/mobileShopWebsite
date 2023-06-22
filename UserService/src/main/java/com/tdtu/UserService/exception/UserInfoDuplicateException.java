package com.tdtu.UserService.exception;

public class UserInfoDuplicateException extends RuntimeException {
    public UserInfoDuplicateException(String message) {
        super(message);
    }
}

