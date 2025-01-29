DROP TABLE IF EXISTS document_record;

CREATE TABLE document_record
(
    id      BIGINT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    content TEXT
);