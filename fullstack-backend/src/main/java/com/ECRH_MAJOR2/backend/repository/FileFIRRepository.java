package com.ECRH_MAJOR2.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ECRH_MAJOR2.backend.model.Admin;
import com.ECRH_MAJOR2.backend.model.After_Login_FIR;

//@Repository
//public interface FileFIRRepository extends JpaRepository<FileFIR,Long>{
//	boolean existsByEmail(String email);
//	FileFIR findByEmail(String email);
//}

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FileFIRRepository extends JpaRepository<After_Login_FIR, Long> {

    // Method to find all FileFIR records by email
    List<After_Login_FIR> findByEmail(String email);

}
