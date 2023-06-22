package com.tdtu.UserService.security;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import com.tdtu.UserService.filter.CustomAuthenticationFilter;
import com.tdtu.UserService.filter.CustomAuthorizationFilter;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Value("${tdtu.secret.key}")
    private String secretKey;

    @Value("${tdtu.role.key}")
    private String roleKey;

    @Value("${tdtu.token.expired.time.mins}")
    private Integer expiredTime;
    
    private UserDetailsService userDetailsService;

    public SecurityConfig(UserDetailsService userDetailsService) {
        super();
        this.userDetailsService = userDetailsService;
        }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean());
        CustomAuthorizationFilter customAuthorizationFilter = new CustomAuthorizationFilter();
        // set keys from application.properties because in filter cannot get those keys by injection
        customAuthenticationFilter.setKey(secretKey, roleKey, expiredTime);
        customAuthorizationFilter.setKey(secretKey, roleKey);
        // use this below to change the url
        customAuthenticationFilter.setFilterProcessesUrl("/api/user/login");
        http.csrf().disable()
                .cors().configurationSource(request -> {
                    CorsConfiguration configuration = new CorsConfiguration();
                    configuration.setAllowedOrigins(Arrays.asList("*"));
                    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
                    configuration.setAllowedHeaders(List.of("*"));
                    return configuration;
                }).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeRequests()
                .antMatchers("/api/user/login/**", "/api/user/register/**").permitAll()
                .antMatchers(HttpMethod.POST, "/api/user/save/**", "/api/product/**").hasAnyAuthority("ROLE_ADMIN")
                .antMatchers(HttpMethod.GET, "/api/user/**", "/api/product/**").hasAnyAuthority("ROLE_USER")
                .antMatchers(HttpMethod.POST, "/api/user/**", "/api/product/**").hasAnyAuthority("ROLE_USER")
                .antMatchers(HttpMethod.PUT,  "/api/user/**", "/api/product/**").hasAnyAuthority("ROLE_ADMIN")
                .antMatchers(HttpMethod.DELETE,  "/api/user/**", "/api/product/**").hasAnyAuthority("ROLE_ADMIN")
                .anyRequest().authenticated()
                .and().addFilter(customAuthenticationFilter)
                .addFilterBefore(customAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}

