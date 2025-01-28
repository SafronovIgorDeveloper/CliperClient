package com.cliper.controller;

import com.cliper.dto.StatusRequisition;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/requisition")
public class RequisitionController {

    @GetMapping("/status")
    public StatusRequisition getRequisitionStatusPage() {
        return StatusRequisition.NO_APPLICATION;
    }
}