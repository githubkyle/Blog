DROP DATABASE IF EXISTS blogs_db;
CREATE DATABASE blogs_db;

CREATE TABLE Users (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR
(30) NOT NULL,
    Email VARCHAR
(50) NOT NULL,
    Pass VARCHAR
(255) NOT NULL
);

CREATE TABLE Posts (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR
(30) NOT NULL,
    Body MEDIUMTEXT NOT NULL,
    author_id INT,
    FOREIGN KEY
(author_id) REFERENCES Users
(ID)
);

USE blogs_db;