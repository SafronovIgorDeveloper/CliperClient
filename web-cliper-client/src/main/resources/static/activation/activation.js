document.addEventListener("DOMContentLoaded", () => {
    const applicationStatus = document.getElementById("applicationStatus");
    const applicationFormContainer = document.getElementById("applicationFormContainer");
    const retryButton = document.getElementById("retryButton");

    // Блокировка/разблокировка полей формы, изменение стилей
    function toggleForm(state) {
        const inputs = applicationFormContainer?.querySelectorAll("input, select, button, textarea");
        if (inputs) {
            inputs.forEach((input) => {
                input.disabled = state; // Устанавливаем или снимаем блокировку

                // Включаем черную обводку и белый фон, если поля разблокированы
                if (!state) {
                    input.style.backgroundColor = "#ffffff"; // Белый фон
                    input.style.border = "1px solid #000000"; // Черная обводка
                    input.style.transition = "background-color 0.3s ease, border 0.3s ease"; // Плавная анимация
                } else {
                    // Убираем черную обводку, если поля заблокированы
                    input.style.backgroundColor = "#f0f0f0"; // Светло-серый фон для заблокированных полей
                    input.style.border = "1px solid #ddd"; // Серая обводка
                }
            });
        }
    }

    // Функция для загрузки стилей
    function loadStylesheet(href) {
        console.log(`Попытка загрузить стили из: ${href}`);
        return new Promise((resolve, reject) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            link.onload = () => {
                console.log(`Стили успешно загружены: ${href}`);
                resolve();
            };
            link.onerror = () => reject(new Error(`Не удалось загрузить стили: ${href}`));
            document.head.appendChild(link);
        });
    }

    // Функция для загрузки скрипта
    function loadScript(src) {
        console.log(`Попытка загрузить скрипт из: ${src}`);
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = () => {
                console.log(`Скрипт успешно загружен: ${src}`);
                resolve();
            };
            script.onerror = () => reject(new Error(`Не удалось загрузить скрипт: ${src}`));
            document.body.appendChild(script);
        });
    }

    // Функция для загрузки формы
    function loadForm() {
        fetch("/requisition/requisition.html")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка загрузки формы");
                }
                return response.text();
            })
            .then((html) => {
                applicationFormContainer.innerHTML = html; // Вставляем содержимое формы
                toggleForm(true); // Блокируем форму по умолчанию

                // Подключение стилей и скриптов формы
                return Promise.all([
                    loadStylesheet("/requisition/style.css"),
                    loadScript("/requisition/requisition.js"),
                ]);
            })
            .then(() => {
                console.log("Форма, стили и скрипт успешно загружены.");
            })
            .catch((error) => {
                console.error("Ошибка загрузки формы, стилей или скриптов:", error);
                applicationFormContainer.innerHTML =
                    "<p style='color: red;'>Не удалось загрузить форму. Пожалуйста, попробуйте позже.</p>";
            });
    }

    // Функция управления видимостью кнопки "Повторить отправку"
    function toggleRetryButton(show) {
        if (!retryButton) return; // Проверяем существование кнопки
        if (show) {
            retryButton.classList.remove("hidden"); // Показываем кнопку
        } else {
            retryButton.classList.add("hidden"); // Скрываем кнопку
        }
    }

    // Функция для загрузки статуса заявки
    function loadStatus() {
        applicationStatus?.classList.add("loading"); // Добавляем анимацию загрузки
        toggleForm(true); // Блокируем поля формы перед запросом статуса

        fetch("http://localhost:8080/requisition/check")
            .then((response) => {
                if (!response.ok) throw new Error("Ошибка связи с сервером");
                return response.json();
            })
            .then((data) => {
                applicationStatus.textContent = data.status; // Устанавливаем статус
                applicationStatus.classList.remove("loading"); // Убираем индикатор загрузки

                if (data.status === "Доступна") {
                    toggleForm(false); // Разблокируем форму, если статус "Доступна"
                }
            })
            .catch((error) => {
                // Если запрос не выполнен, разблокируем форму для редактирования
                applicationStatus.textContent = "Ошибка получения статуса"; // Уведомление об ошибке
                applicationStatus.classList.remove("loading");
                applicationStatus.classList.add("error"); // Применяем стиль ошибки
                console.error("Ошибка выполнения запроса:", error);

                toggleRetryButton(true);
                toggleForm(false); // Разблокируем форму для ручного ввода
            });
    }

    // Обработчик нажатия на кнопку "Повторить отправку"
    retryButton.addEventListener("click", () => {
        console.log("Повторная попытка получения статуса...");
        applicationStatus.textContent = "Повторное получение статуса..."; // Обновляем статус
        applicationStatus.classList.remove("error"); // Убираем класс ошибки
        toggleRetryButton(false);
        loadStatus(); // Повторяем запрос
    });

    // Инициализация при загрузке страницы
    loadForm();
    loadStatus();

    // Скрываем кнопку "Повторить отправку", если она уже на странице
    toggleRetryButton(false);
});