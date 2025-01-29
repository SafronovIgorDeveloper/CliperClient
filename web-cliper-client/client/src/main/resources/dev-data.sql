-- Проверяем, существует ли таблица `document_record`, и добавляем тестовые записи
INSERT INTO document_record (name, content)
VALUES ('Test Document 1', 'This is the first test document content.'),
       ('Test Document 2', 'This is the second test document content.'),
       ('Test Document 3', 'This is the third test document content.');

-- Проверяем, существует ли таблица `history_record`, и добавляем тестовые записи
INSERT INTO history_record (description, timestamp)
VALUES ('History entry 1 description', '2023-11-01 10:00:00'),
       ('History entry 2 description', '2023-11-01 10:30:00'),
       ('History entry 3 description', '2023-11-01 11:00:00');