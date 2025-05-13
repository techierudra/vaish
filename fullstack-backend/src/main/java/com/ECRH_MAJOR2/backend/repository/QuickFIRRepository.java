package com.ECRH_MAJOR2.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ECRH_MAJOR2.backend.model.QuickFIR;

@Repository
public interface QuickFIRRepository extends JpaRepository<QuickFIR,Long>{

}
