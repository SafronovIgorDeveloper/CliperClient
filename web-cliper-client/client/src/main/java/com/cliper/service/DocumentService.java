package com.cliper.service;

import com.cliper.model.DocumentRecord;
import com.cliper.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentService {
    private final DocumentRepository documentRepository;

    @Autowired
    public DocumentService(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    public List<DocumentRecord> getAllDocuments() {
        return documentRepository.findAll();
    }
}