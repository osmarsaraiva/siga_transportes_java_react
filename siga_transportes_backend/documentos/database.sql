CREATE DATABASE VENDAS;

CREATE TABLE CIDADE (
	ID BIGSERIAL NOT NULL PRIMARY KEY,
	CIDADE VARCHAR(100) NOT NULL,
	ESTADO VARCHAR(100) NOT NULL,
	OUTRO VARCHAR(100) NOT NULL
);