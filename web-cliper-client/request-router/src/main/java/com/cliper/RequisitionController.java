package com.cliper;

import com.cliper.client.SomeClientServer;
import com.cliper.dto.StatusRequisition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/requisition")
public class RequisitionController {
    private final SomeClientServer clientServer;

    @Autowired
    public RequisitionController(SomeClientServer clientServer) {
        this.clientServer = clientServer;
    }

    @GetMapping("/status")
    public StatusRequisition getRequisitionStatus() {
        return StatusRequisition.NO_APPLICATION;
//        return clientServer.fetchRequisitionStatus();
    }
}