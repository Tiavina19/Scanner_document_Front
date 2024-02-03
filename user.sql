-- Table user
CREATE TABLE "user" (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

-- Insert
INSERT INTO "user" (id, nom, email) VALUES 
  (1, 'Haingo Harizo', 'hei.harizo@gmail.com'),
  (2, 'Ando N''irina', 'hei.ando.1007@gmail.com'),
  (3, 'David Deux', 'hei.tiavina@gmai.com');