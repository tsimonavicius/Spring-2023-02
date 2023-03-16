INSERT INTO PRODUCT (NAME, DESCRIPTION, PRICE, CREATE_DATE)
VALUES ('Pirmojo produkto pavadinimas', 'neblogas produktas', 12, DEFAULT),
       ('Antrojo produkto pavadinimas', 'neblogas produktas', 54, DEFAULT),
       ('Treciojo produkto pavadinimas', 'neblogas produktas', 77, DEFAULT),
       ('Ketvirtojo produkto pavadinimas', 'neblogas produktas', 32, DEFAULT);


INSERT INTO eshop_user (id, name, surname, email, password)
VALUES
    -- user@email.com:user -- USER
    (1, 'Vaflis', 'Kebabas', 'user@email.com', 'user'),

    -- admin@admin.com:admin -- USER, ADMIN
    (2, 'Adminas', 'Adminiauskas', 'admin@admin.com', 'admin');

INSERT INTO role (name)
VALUES
    ('USER'),
    ('ADMIN');

INSERT INTO eshop_user_roles (user_id, roles_name)
VALUES
    (1, 'USER'),
    (2, 'USER'),
    (2, 'ADMIN');