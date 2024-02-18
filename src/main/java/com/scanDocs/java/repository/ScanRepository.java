package com.scanDocs.java.repository;

import com.scanDocs.java.model.Scan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ScanRepository extends JpaRepository<Scan , Long> {
    @Query("SELECT s FROM Scan s JOIN FETCH s.user WHERE s.user.id = :userId")
    List<Scan> findByUserId(@Param("userId") Long userId);
}
