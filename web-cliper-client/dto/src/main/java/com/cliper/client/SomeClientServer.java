package com.cliper.client;

import com.cliper.dto.StatusRequisition;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "someClientServer", url = "https://some-client-server.com")
public interface SomeClientServer {
    @GetMapping("/requisition/status")
    StatusRequisition fetchRequisitionStatus();
}