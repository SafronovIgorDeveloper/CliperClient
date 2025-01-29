DROP TABLE IF EXISTS document_record;
DROP TABLE IF EXISTS history_record;

CREATE TABLE document_record
(
    id      BIGINT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    content TEXT
);

CREATE TABLE history_record
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    timestamp   DATETIME     NOT NULL
);