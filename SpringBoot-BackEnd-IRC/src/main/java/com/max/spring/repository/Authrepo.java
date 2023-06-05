package com.max.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.spring.model.AuthModel;

public interface Authrepo extends JpaRepository<AuthModel, Long> {

	AuthModel findByusername(String username);

}
