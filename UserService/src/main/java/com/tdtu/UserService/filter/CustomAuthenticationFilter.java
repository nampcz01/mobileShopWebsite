package com.tdtu.UserService.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.tdtu.UserService.security.CustomUser;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private String secretKey;
    private String roleKey;
    private Integer expiredTime;
    // this authenticates the user
    private final AuthenticationManager authenticationManager;

    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        String username, password;
        try {
            Map<String, String> requestMap = new ObjectMapper().readValue(request.getInputStream(), Map.class);
            username = requestMap.get("username");
            password = requestMap.get("password");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
                password);
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        Map<String, String> result = new HashMap<>();
        response.setHeader("error", failed.getMessage());
        response.setStatus(HttpStatus.FORBIDDEN.value());
        result.put("error_message", failed.getMessage());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        // write tokens in body of response
        new ObjectMapper().writeValue(response.getOutputStream(), result);
    }

    // be called when login successfully
    // send access token/refresh token to the user
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authentication) throws IOException, ServletException {
        // getPrincipal returns an object is the user that successfully authenticated
        CustomUser user = (CustomUser) authentication.getPrincipal();
        Algorithm algorithm = Algorithm.HMAC256(secretKey.getBytes());
        String access_token = JWT.create()
                // init string u want (userId, username, st unique about user...)
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + expiredTime * 60 * 1000))
                // company name, author, artist, token
                .withIssuer(request.getRequestURL().toString())
                // all the roles, key to this list of roles
                .withClaim(roleKey,
                        user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);

        Map<String, String> result = new HashMap<>();
        result.put("access_token", access_token);
        result.put("username", user.getUsername());
        result.put("name", user.getName());
        result.put("email", user.getEmail());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        // write tokens in body of response
        new ObjectMapper().writeValue(response.getOutputStream(), result);
    }

    public void setKey(String secretKey, String roleKey, Integer expiredTime) {
        this.secretKey = secretKey;
        this.roleKey = roleKey;
        this.expiredTime = expiredTime;
    }
}
