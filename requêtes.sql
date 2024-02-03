-- Liste des documents téléchargés par un utilisateur spécifique (par exemple, utilisateur avec ID 1) avec noms et dates :
SELECT D.name AS nom_document, D.date_upload
FROM "user" U
JOIN download DL ON U.id = DL.id_user
JOIN document D ON DL.id_document = D.id
WHERE U.id = 1;

--Liste des utilisateurs et du nombre de documents qu'ils ont téléchargés :
SELECT u.nom AS nom_utilisateur, COUNT(DL.id_document) AS nombre_documents_telecharges
FROM "user" u
LEFT JOIN download DL ON u.id = DL.id_user
GROUP BY u.nom;

-- Liste des documents triés par nombre de téléchargements décroissant :
SELECT D.name AS nom_document, COUNT(DL.id_user) AS nombre_telechargements
FROM document D
LEFT JOIN download DL ON D.id = DL.id_document
GROUP BY D.name
ORDER BY nombre_telechargements DESC;

-- Liste des téléchargements avec noms d'utilisateur, noms de document et dates :
SELECT u.nom AS nom_utilisateur, D.name AS nom_document, DL.date
FROM "user" u
JOIN download DL ON u.id = DL.id_user
JOIN document D ON DL.id_document = D.id;

