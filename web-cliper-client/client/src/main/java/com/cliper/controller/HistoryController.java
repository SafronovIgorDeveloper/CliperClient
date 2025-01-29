package com.cliper.controller;

import com.cliper.model.HistoryRecord;
import com.cliper.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/history")
public class HistoryController {
    private final HistoryRepository historyRepository;

    @Autowired
    public HistoryController(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    @GetMapping
    public List<HistoryRecord> getHistory() {
        return historyRepository.findAll();
    }
}