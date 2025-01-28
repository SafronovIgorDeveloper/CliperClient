document.addEventListener("DOMContentLoaded", () => {
    const applicationStatus = document.getElementById("applicationStatus");
    const retryButton = document.getElementById("retryButton");

    // Функция для отображения статуса
    function updateStatus(message, isError = false) {
        applicationStatus.textContent = message;
        applicationStatus.classList.toggle("error", isError); // Если ошибка, добавляем стиль ошибки
    }

    // Показ/скрытие кнопки "Повторить попытку"
    function toggleRetryButton(show) {
        retryButton.classList.toggle("hidden", show);
    }

    // Выполнение запроса на сервер для проверки статуса
    function checkApplicationStatus() {
        updateStatus("Проверяем статус...");

        fetch("http://localhost:8080/requisition/status")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка получения данных о статусе");
                }
                return response.json();
            })
            .then((data) => {
                // Обновляем текст статуса в зависимости от данных
                switch (data) {
                    case "APPROVED":
                        updateStatus("Ваша заявка одобрена.");
                        toggleRetryButton(false); // Скрываем кнопку
                        break;
                    case "PENDING":
                        toggleRetryButton(true);
                        updateStatus("Заявка находиться на рассмотрении.");
                        toggleRetryButton(false); // Скрываем кнопку
                        break;
                    case "REJECTED":
                        updateStatus("К сожалению, ваша заявка была отклонена.", true);
                        toggleRetryButton(false); // Кнопка здесь не нужна
                        break;
                    case "NO_APPLICATION":
                        updateStatus("Заявка не найдена. Перенаправление на страницу подачи заявки...");
                        setTimeout(() => {
                            window.location.href = "/requisition"; // URL страницы подачи заявки
                        }, 3000); // Перенаправление через 3 секунды
                        break;
                    default:
                        updateStatus("Неизвестный статус заявки.", true);
                        toggleRetryButton(true); // Показываем кнопку для повторной попытки
                        break;
                }
            })
            .catch((error) => {
                console.error("Ошибка:", error);
                updateStatus("Не удалось выполнить проверку статуса. Повторите попытку.", true);
                toggleRetryButton(true); // Показываем кнопку
            });
    }

    // Обработчик нажатия на кнопку "Повторить попытку"
    retryButton.addEventListener("click", () => {
        toggleRetryButton(false); // Скрываем кнопку
        checkApplicationStatus(); // Повторяем запрос
    });

    // Проверка статуса при загрузке страницы
    checkApplicationStatus();
});