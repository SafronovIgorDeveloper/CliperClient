async function loadHistory() {
    try {
        // Делаем запрос к серверу
        const response = await fetch('/history');

        // Проверяем успешность запроса
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status} ${response.statusText}`);
        }

        // Парсим данные как JSON
        const historyData = await response.json();

        // Найти таблицу истории
        const historyTableBody = document.querySelector('.history-table tbody');
        const historyTableHeaderNumber = document.querySelector('.history-table thead th:nth-child(1)'); // Первый заголовок "№"
        const historyTableHeaderDate = document.querySelector('.history-table thead th:nth-child(2)'); // Второй заголовок "Время"

        // Очищаем таблицу перед заполнением
        historyTableBody.innerHTML = '';

        // Вычисляем максимальную длину номера (ID) и даты
        let maxIdLength = 0;
        let maxDateLength = 0;

        // Заполняем таблицу данными
        historyData.forEach(record => {
            const row = document.createElement('tr');

            // Создаем ячейки для каждой колонки
            const idCell = document.createElement('td');
            idCell.textContent = record.id;

            maxIdLength = Math.max(maxIdLength, record.id.toString().length); // Сохраняем максимальную длину номера

            const timestampCell = document.createElement('td');
            const formattedDate = new Date(record.timestamp).toLocaleString(); // Преобразование времени в читаемый формат
            timestampCell.textContent = formattedDate;

            maxDateLength = Math.max(maxDateLength, formattedDate.length); // Сохраняем максимальную длину строки даты

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = record.description;

            // Добавляем ячейки в строку
            row.appendChild(idCell);
            row.appendChild(timestampCell);
            row.appendChild(descriptionCell);

            // Добавляем строку в таблицу
            historyTableBody.appendChild(row);
        });

        // Устанавливаем ширину столбца "№" для заголовка и всех ячеек
        const columnNumberWidth = Math.max(80, maxIdLength * 10); // Минимальная ширина 80px, иначе 10px на символ
        historyTableHeaderNumber.style.width = `${columnNumberWidth}px`; // Для заголовка "№"
        const idCells = historyTableBody.querySelectorAll('tr td:first-child'); // Все ячейки первого столбца
        idCells.forEach(cell => {
            cell.style.width = `${columnNumberWidth}px`;
        });

        // Устанавливаем ширину столбца "Время" для заголовка и всех ячеек
        const columnDateWidth = Math.max(150, maxDateLength * 8); // Минимальная ширина 150px, иначе 8px на символ
        historyTableHeaderDate.style.width = `${columnDateWidth}px`; // Для заголовка "Время"
        const dateCells = historyTableBody.querySelectorAll('tr td:nth-child(2)'); // Все ячейки второго столбца
        dateCells.forEach(cell => {
            cell.style.width = `${columnDateWidth}px`;
        });

    } catch (error) {
        // Ловим и выводим ошибки
        console.error('Ошибка при загрузке данных:', error);
    }
}

// Загружаем историю при загрузке страницы
document.addEventListener('DOMContentLoaded', loadHistory);