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
public class After_Login_FIR {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fir_id")
    private Long id;

	@Column(name = "email")
    private String email;
	
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "emergency_contact", nullable = false)
    private String emergencyContact;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "when_occured_date", nullable = false)
    private Date date;

    @Column(name = "when_occurred_time", nullable = false)
    private Time whenOccurredTime;

    @Column(name = "location_state", nullable = false)
    private String locationState;

    @Column(name = "location_city", nullable = false)
    private String locationCity;

    @Column(name = "landmark", nullable = false)
    private String landmark;

    @Column(name = "fir_report_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp firReportDate;

    @Column(name = "fir_status")
    private String firStatus;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getWhenOccurredTime() {
        return whenOccurredTime;
    }

    public void setWhenOccurredTime(Time whenOccurredTime) {
        this.whenOccurredTime = whenOccurredTime;
    }

    public String getLocationState() {
        return locationState;
    }

    public void setLocationState(String locationState) {
        this.locationState = locationState;
    }

    public String getLocationCity() {
        return locationCity;
    }

    public void setLocationCity(String locationCity) {
        this.locationCity = locationCity;
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

