
package com.ECRH_MAJOR2.backend.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ECRH_MAJOR2.backend.exception.UserNotFoundException;
import com.ECRH_MAJOR2.backend.model.Admin;
import com.ECRH_MAJOR2.backend.model.After_Login_FIR;
import com.ECRH_MAJOR2.backend.repository.FileFIRRepository;

@RestController
@CrossOrigin
public class FileFIRController {
	@Autowired
    private FileFIRRepository fileFIRRepository;

    @PostMapping("/filefir")
    After_Login_FIR newFileFIR(@RequestBody After_Login_FIR newFileFIR) {
        newFileFIR.setFirReportDate(java.sql.Timestamp.valueOf(LocalDateTime.now()));
        return fileFIRRepository.save(newFileFIR);
    }


 
    
    @GetMapping("/filefirdata") //list all filefir data
    List<After_Login_FIR> getfilefirdata() {
        return fileFIRRepository.findAll();
    }
   
    @GetMapping("/filefirdata/{id}") //view filefir data
    After_Login_FIR getfilefirdataByIdentifier(@PathVariable Long id) {
        return fileFIRRepository.findById(id).orElse(null);
    }



    @PutMapping("/filefirdata/identifier/{id}")  //update qfir data
    After_Login_FIR updateffirdata(@RequestBody After_Login_FIR newFileFIR, @PathVariable Long id) {
        return fileFIRRepository.findById(id)
                .map(fileFIR -> {
                	
                	fileFIR.setEmail(newFileFIR.getEmail());
                	fileFIR.setName(newFileFIR.getName());
                    fileFIR.setEmergencyContact(newFileFIR.getEmergencyContact());
                    fileFIR.setCategory(newFileFIR.getCategory());
                    fileFIR.setDescription(newFileFIR.getDescription());
                    fileFIR.setDate(newFileFIR.getDate());
                    fileFIR.setWhenOccurredTime(newFileFIR.getWhenOccurredTime());
                    fileFIR.setLocationState(newFileFIR.getLocationState());
                    fileFIR.setLocationCity(newFileFIR.getLocationCity());
                    fileFIR.setLandmark(newFileFIR.getLandmark());
                    fileFIR.setFirReportDate(newFileFIR.getFirReportDate());
                    fileFIR.setFirStatus(newFileFIR.getFirStatus());

                    return fileFIRRepository.save(fileFIR);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }


    @DeleteMapping("/filefirdata/identifier/{id}") //delete qfir data
    String deleteFFIRdata(@PathVariable Long id){
        if(!fileFIRRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        fileFIRRepository.deleteById(id);
        return  "FileFIR with id "+id+" has been deleted successfully.";
    }


    @GetMapping("/filefirdata/email/{email}") // view filefir data by email
    public ResponseEntity<List<After_Login_FIR>> getfilefirdataByEmail(@PathVariable String email) {
        List<After_Login_FIR> fileFIRList = fileFIRRepository.findByEmail(email);
        if (!fileFIRList.isEmpty()) {
            return ResponseEntity.ok(fileFIRList);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}


