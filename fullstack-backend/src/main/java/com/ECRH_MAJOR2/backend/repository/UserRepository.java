package com.ECRH_MAJOR2.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ECRH_MAJOR2.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	 boolean existsByEmail(String email);
	 User findByEmail(String email);
	 User findByEmailAndPassword(String email, String password);
}