--table document
CREATE TABLE document (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    title VARCHAR(100),
    path VARCHAR(255),
    date_upload DATE
);

--Insert
INSERT INTO document (id, name,title, path, date_upload) VALUES 
  (1, 'Contrat ABC','Mois de Janvier', '/download/contrat_abc.pdf', '2024-02-03'),
  (2, 'Facture XYZ', 'Société WRAY','/download/facture_xyz.pdf', '2024-02-04'),
  (3, 'Note de service','Ecole Leader', '/download/note_service.docx', '2024-02-05');