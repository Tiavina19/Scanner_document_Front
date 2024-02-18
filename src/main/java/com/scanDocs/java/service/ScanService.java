package com.scanDocs.java.service;

import com.scanDocs.java.model.Scan;
import com.scanDocs.java.model.User;
import com.scanDocs.java.repository.ScanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ScanService {
    @Autowired
    private ScanRepository scanRepository;

    public void addScan(Scan scan) {

        Objects.requireNonNull(scan.getUser(), "User cannot be null");
        // Définissez l'utilisateur pour le scan
        scanRepository.save(scan);
    }

    public List<Scan> getScanHistoryForUser(Long userId) {
        return scanRepository.findByUserId(userId);
    }

}
