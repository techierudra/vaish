
package com.ECRH_MAJOR2.backend.model;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class QuickFIR {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fir_id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "emergency_contact", nullable = false)
    private String emergencyContact;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "when_occured_date", nullable = false)
    private Date whenOccurredDate;

    @Column(name = "when_occurred_time", nullable = false)
    private Time whenOccurredTime;

    @Column(name = "where_occured_state", nullable = false)
    private String whereOccurredState;

    @Column(name = "where_occured_city", nullable = false)
    private String whereOccurredCity;

    @Column(name = "Landmark", nullable = false)
    private String landmark;

    @Column(name = "FIR_REPORT_DATE", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp firReportDate;

    @Column(name = "FIR_STATUS")
    private String firStatus;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmergencyContact() {
        return emergencyContact;
    }

    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getWhenOccurredDate() {
        return whenOccurredDate;
    }

    public void setWhenOccurredDate(Date whenOccurredDate) {
        this.whenOccurredDate = whenOccurredDate;
    }

    public Time getWhenOccurredTime() {
        return whenOccurredTime;
    }

    public void setWhenOccurredTime(Time whenOccurredTime) {
        this.whenOccurredTime = whenOccurredTime;
    }

    public String getWhereOccurredState() {
        return whereOccurredState;
    }

    public void setWhereOccurredState(String whereOccurredState) {
        this.whereOccurredState = whereOccurredState;
    }

    public String getWhereOccurredCity() {
        return whereOccurredCity;
    }

    public void setWhereOccurredCity(String whereOccurredCity) {
        this.whereOccurredCity = whereOccurredCity;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }
    public Timestamp getFirReportDate() {
        return firReportDate;
    }

    public void setFirReportDate(Timestamp firReportDate) {
        this.firReportDate = firReportDate;
    }

    public String getFirStatus() {
        return firStatus;
    }

    public void setFirStatus(String firStatus) {
        this.firStatus = firStatus;
    }
}
