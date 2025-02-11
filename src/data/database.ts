import { Database } from "sqlite3";

const db = new Database("eventos.db");

// Criar tabelas
db.exec(`
    CREATE TABLE IF NOT EXISTS usuario (
        pk_usua_id INTEGER PRIMARY KEY AUTOINCREMENT,
        usua_nome TEXT NOT NULL,
        usua_email TEXT UNIQUE NOT NULL,
        usua_senha TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS eventos (
        pk_even_id INTEGER PRIMARY KEY AUTOINCREMENT,
        even_nome TEXT NOT NULL,
        even_data TEXT NOT NULL,
        fk_usua_id INTEGER,
        FOREIGN KEY(fk_usua_id) REFERENCES usuario(pk_usua_id)
    );

    CREATE TABLE IF NOT EXISTS logs (
        pk_logs_id INTEGER PRIMARY KEY AUTOINCREMENT,
        logs_acao TEXT NOT NULL,
        fk_usua_id INTEGER,
        logs_timestamp TEXT NOT NULL,
        FOREIGN KEY(fk_usua_id) REFERENCES usuario(pk_usua_id)
    );
`);

export default db;
