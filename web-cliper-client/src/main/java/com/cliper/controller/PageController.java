package com.cliper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String getHomePage() {
        return "forward:index.html";
    }

    @GetMapping("/requisition")
    public String getRequisitionPage() {
        return "forward:requisition/requisition.html";
    }
}