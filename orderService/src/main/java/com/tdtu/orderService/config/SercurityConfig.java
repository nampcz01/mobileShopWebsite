package com.tdtu.orderService.config;

import java.security.Key;

import org.springframework.context.annotation.Configuration;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Configuration
public class SercurityConfig {
	private final static String SECRET = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";
	
	public static String getUsernameFromToken(String token) {
        try {
            Jwt<?, Claims> jwt = Jwts.parserBuilder()
                    .setSigningKey(SECRET)
                    .build()
                    .parse(token);
            Claims claims = jwt.getBody();
            return claims.getSubject();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

	private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}

