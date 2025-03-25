package com.goldencat.bankingapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestParam String username, @RequestParam String password) {
        Map<String, Object> response = new HashMap<>();
        if ("user".equals(username) && "pass".equals(password)) {
            response.put("message", "Login successful");
            response.put("userId", 1L); // Simulate a user ID
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
    }
}