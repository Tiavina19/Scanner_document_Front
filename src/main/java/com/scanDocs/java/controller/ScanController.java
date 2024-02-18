package com.scanDocs.java.controller;

import com.scanDocs.java.model.Scan;
import com.scanDocs.java.service.ScanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("")
public class ScanController {
    @Autowired
    private ScanService scanService;

    @PostMapping("/scans")
    public ResponseEntity<Void> addScan(@RequestBody Scan scan) {
            Scan newScan = new Scan();
            newScan.setScanDateTime(LocalDateTime.now());
            newScan.setScanType("scanner");
            scanService.addScan(newScan);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }

    @GetMapping("/scans")
    public ResponseEntity<List<Scan>> getAllScans() {
        List<Scan> allScans = scanService.getAllScans();
        return new ResponseEntity<>(allScans, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Scan>> getScanHistoryForUser(@PathVariable Long userId) {
        List<Scan> scanHistory = scanService.getScanHistoryForUser(userId);
        return new ResponseEntity<>(scanHistory, HttpStatus.OK);
    }


}
