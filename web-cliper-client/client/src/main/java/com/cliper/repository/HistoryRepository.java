package com.cliper.repository;

import com.cliper.model.HistoryRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<HistoryRecord, Long> {
}