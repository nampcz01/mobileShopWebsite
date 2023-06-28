package com.tdtu.UserService.security;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.*;
import javax.servlet.http.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@SuppressWarnings("serial")
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint, Serializable {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
                "Unauthorized");
    }
}