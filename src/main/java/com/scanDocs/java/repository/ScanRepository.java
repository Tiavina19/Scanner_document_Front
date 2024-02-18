package com.scanDocs.java.repository;

import com.scanDocs.java.model.Scan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScanRepository extends JpaRepository<Scan , Long> {
    List<Scan> findByUserId(Long userId);
}
