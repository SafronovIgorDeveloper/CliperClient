package com.cliper.repository;

import com.cliper.model.DocumentRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<DocumentRecord, Long> {
}