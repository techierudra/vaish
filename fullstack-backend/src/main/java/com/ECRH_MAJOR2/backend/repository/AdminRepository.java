package com.ECRH_MAJOR2.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ECRH_MAJOR2.backend.model.Admin;
import com.ECRH_MAJOR2.backend.model.User;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long>{
	 boolean existsByEmail(String email);
	 Admin findByEmail(String email);
	 Admin findByEmailAndPassword(String email, String password);
}

