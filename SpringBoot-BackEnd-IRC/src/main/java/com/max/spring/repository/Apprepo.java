package com.max.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.spring.model.AppModel;

public interface Apprepo extends JpaRepository<AppModel, Long> {

}
