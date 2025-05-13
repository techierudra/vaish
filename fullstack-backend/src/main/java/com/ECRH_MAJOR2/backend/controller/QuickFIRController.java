package com.ECRH_MAJOR2.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ECRH_MAJOR2.backend.exception.UserNotFoundException;
import com.ECRH_MAJOR2.backend.model.QuickFIR;
import com.ECRH_MAJOR2.backend.model.User;
import com.ECRH_MAJOR2.backend.repository.QuickFIRRepository;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class QuickFIRController {

    @Autowired
    private QuickFIRRepository quickFIRRepository;

    @PostMapping("/quickfir")
    QuickFIR newQuickFIR(@RequestBody QuickFIR newQuickFIR) {
        newQuickFIR.setFirReportDate(java.sql.Timestamp.valueOf(LocalDateTime.now()));
        return quickFIRRepository.save(newQuickFIR);
    }


 
    
    @GetMapping("/quickfirdata") //list all quickfir data
    List<QuickFIR> getquickfirdata() {
        return quickFIRRepository.findAll();
    }
   
    @GetMapping("/quickfirdata/identifier/{id}") //view quickfir data
    QuickFIR getquickfirdataByIdentifier(@PathVariable Long id) {
        return quickFIRRepository.findById(id).orElse(null);
    }



    @PutMapping("/quickfirdata/identifier/{id}")  //update qfir data
    QuickFIR updateqfirdata(@RequestBody QuickFIR newQuickFIR, @PathVariable Long id) {
        return quickFIRRepository.findById(id)
                .map(quickFIR -> {
                	
                	quickFIR.setName(newQuickFIR.getName());
                    quickFIR.setEmergencyContact(newQuickFIR.getEmergencyContact());
                    quickFIR.setCategory(newQuickFIR.getCategory());
                    quickFIR.setDescription(newQuickFIR.getDescription());
                    quickFIR.setWhenOccurredDate(newQuickFIR.getWhenOccurredDate());
                    quickFIR.setWhenOccurredTime(newQuickFIR.getWhenOccurredTime());
                    quickFIR.setWhereOccurredState(newQuickFIR.getWhereOccurredState());
                    quickFIR.setWhereOccurredCity(newQuickFIR.getWhereOccurredCity());
                    quickFIR.setLandmark(newQuickFIR.getLandmark());
                    quickFIR.setFirReportDate(newQuickFIR.getFirReportDate());
                    quickFIR.setFirStatus(newQuickFIR.getFirStatus());

                    return quickFIRRepository.save(quickFIR);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }


    @DeleteMapping("/quickfirdata/identifier/{id}") //delete qfir data
    String deleteQFIRdata(@PathVariable Long id){
        if(!quickFIRRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        quickFIRRepository.deleteById(id);
        return  "QuickFIR with id "+id+" has been deleted successfully.";
    }

//


}


