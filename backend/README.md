# api-petshop
Repo atividade petshop


DELIMITER $$

CREATE PROCEDURE InsertUsers()
BEGIN
    DECLARE i INT DEFAULT 1;

    WHILE i <= 50 DO
        INSERT INTO users (name, email, password, phone, idRole, createdAt, updatedAt) 
        VALUES (
            CONCAT('User', i), 
            CONCAT('user', i, '@example.com'), 
            CONCAT('password', i), 
            1111111111 + i, 
            1,
            "2024-11-18 19:10:09",
            "2024-11-18 19:10:09"
        );
        SET i = i + 1;
    END WHILE;
END$$

DELIMITER ;
CALL InsertUsers();
