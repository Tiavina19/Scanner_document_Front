--table download
CREATE TABLE download (
    id INT PRIMARY KEY,
    id_user INT,
    id_document INT,
    date DATE,
    FOREIGN KEY (id_user) REFERENCES "user"(id),
    FOREIGN KEY (id_document) REFERENCES document(id)
);

--insert
INSERT INTO download (id, id_user, id_document, date) VALUES 
  (1, 1, 1, '2024-02-03'),
  (2, 1, 2, '2024-02-04'),
  (3, 2, 1, '2024-02-05');