package com.scanDocs.java.service;

import com.scanDocs.java.model.Scan;
import com.scanDocs.java.model.User;
import com.scanDocs.java.repository.ScanRepository;
import jakarta.transaction.Transactional;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ScanService {
    @Autowired
    private ScanRepository scanRepository;

    @Transactional
    public List<Scan> getScanHistoryForUser(Long userId) {
        List<Scan> scanHistory = scanRepository.findByUserId(userId);
        for (Scan scan : scanHistory) {
            Hibernate.initialize(scan.getUser());
        }
        return scanHistory;
    }

    public void addScan(Scan scan) {

        Objects.requireNonNull(scan.getUser(), "User cannot be null");
        // Définissez l'utilisateur pour le scan
        scanRepository.save(scan);
    }

    public List<Scan> getAllScans() {
        return scanRepository.findAll();
    }

}
