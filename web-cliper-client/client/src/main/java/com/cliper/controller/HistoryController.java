package com.cliper.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/history")
public class HistoryController {

    @GetMapping
    public List<String> getHistory() {
        return Arrays.asList(
                "Событие 1: Пользователь вошёл в систему",
                "Событие 2: Пользователь обновил профиль",
                "Событие 3: Пользователь обновил профиль",
                "Событие 4: Пользователь обновил профиль",
                "Событие 5: Пользователь обновил профиль",
                "Событие 6: Пользователь обновил профиль",
                "Событие 7: Пользователь обновил профиль",
                "Событие 8: Пользователь обновил профиль",
                "Событие 9: Пользователь обновил профиль",
                "Событие 10: Пользователь обновил профиль",
                "Событие 11: Пользователь обновил профиль",
                "Событие 12: Создана новая задача"
        );
    }
}