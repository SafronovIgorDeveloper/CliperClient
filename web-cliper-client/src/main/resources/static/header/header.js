document.addEventListener('DOMContentLoaded', async () => {
    const headerContainer = document.getElementById('header-container');

    // Загружаем статичный хедер через fetch
    try {
        const response = await fetch('/header/header.html');

        if (!response.ok) {
            throw new Error(`Хедер не удалось загрузить: ${response.status}`);
        }

        // Вставляем HTML хедера в контейнер
        headerContainer.innerHTML = await response.text();

        // Динамически подключаем CSS для хедера
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/header/styles.css';
        document.head.appendChild(link);
    } catch (error) {
        console.error('Ошибка загрузки хедера:', error);
        headerContainer.innerHTML = '<p>Не удалось загрузить хедер.</p>';
    }
});