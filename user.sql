-- Table user
CREATE TABLE "user" (
    id serial PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

-- Insert
INSERT INTO "user" (username, email, password) VALUES
  ('Haingo Harizo', 'hei.harizo@gmail.com', 'hariijess'),
  ( 'Ando N''irina', 'hei.ando.1007@gmail.com','andokezia'),
  ('David Deux', 'hei.tiavina@gmai.com','deux');