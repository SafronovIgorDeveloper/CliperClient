// Функция для загрузки истории событий
async function loadHistory() {
    try {
        // Делаем GET-запрос к серверу на эндпоинт /history
        const response = await fetch('/history');

        // Проверяем успешность запроса
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }

        // Получаем данные из тела ответа
        const historyData = await response.json();

        // Находим таблицу "История" на странице
        const historyTableBody = document.querySelector('.history-table tbody');

        // Очищаем содержимое таблицы
        historyTableBody.innerHTML = '';

        // Если данных нет, отображаем сообщение об отсутствии данных
        if (historyData.length === 0) {
            const emptyRow = document.createElement('tr');
            const emptyCell = document.createElement('td');
            emptyCell.colSpan = 1; // Одна колонка
            emptyCell.textContent = 'Нет истории для отображения.';
            emptyCell.style.textAlign = 'center';
            emptyRow.appendChild(emptyCell);
            historyTableBody.appendChild(emptyRow);
            return;
        }

        // Генерируем строки для каждого сообщения
        historyData.forEach((message) => {
            const row = document.createElement('tr');

            // Описание события
            const messageCell = document.createElement('td');
            messageCell.textContent = message; // Текст сообщения
            row.appendChild(messageCell);

            // Добавляем строку в тело таблицы
            historyTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Ошибка при загрузке истории:', error);

        // Отображаем сообщение об ошибке
        const historyTableBody = document.querySelector('.history-table tbody');
        historyTableBody.innerHTML = '';
        const errorRow = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.colSpan = 1; // Одна колонка
        errorCell.textContent = 'Не удалось загрузить историю. Попробуйте позже.';
        errorCell.style.textAlign = 'center';
        errorRow.appendChild(errorCell);
        historyTableBody.appendChild(errorRow);
    }
}

// Загружаем историю при загрузке страницы
document.addEventListener('DOMContentLoaded', loadHistory);