"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addusuarios = addusuarios;
exports.listarTodos = listarTodos;
exports.deletarUsuario = deletarUsuario;
exports.alterarUsuario = alterarUsuario;
const database_1 = __importDefault(require("../data/database"));
const logService_1 = require("../logs/logService");
const UsuarioValidation_1 = require("../validation/UsuarioValidation");
function addusuarios(usuario, callback) {
    const validationResult = UsuarioValidation_1.usuarioSchema.safeParse(usuario);
    const query = `INSERT INTO usuario (usua_nome, usua_email, usua_senha) VALUES (?, ?, ?)`;
    database_1.default.run(query, [usuario.nome, usuario.email, usuario.senha], function (erro) {
        if (erro) {
            console.log(`BD ERRO USUÁRIO ${erro}`);
        }
        else {
            const usuarioId = this.lastID;
            callback(usuarioId);
        }
    });
}
function listarTodos() {
    const query = `SELECT * FROM usuario`;
    database_1.default.all(query, (erro, rows) => {
        if (erro) {
            console.log(`BD ERRO USUÁRIO ${erro}`);
        }
        else {
            console.log("Listado com sucesso");
            console.log(rows);
        }
    });
}
;
function deletarUsuario(id) {
    const query = `DELETE FROM usuario WHERE pk_usua_id = ?`;
    database_1.default.run(query, (erro) => {
        if (erro) {
            console.log(`BD ERRO USUÁRIO  ${erro}`);
        }
        else {
            (0, logService_1.addLog)("USUARIO DELETADO COM SUCESSO", id, logService_1.dataString);
        }
    });
}
function alterarUsuario(id, nome, email, senha) {
    const query = `UPDATE usuario SET usua_nome = ?,
                                       usua_email = ?,
                                       usua_senha = ?
                                       WHERE pk_usua_id = ?`;
    database_1.default.run(query, [nome, email, senha, id], function (erro) {
        if (erro) {
            console.log(`BD ERRO USUÁRIO  ${erro}`);
        }
        else if (this.changes === 0) {
            console.log(`Usuario não encontrado`);
        }
        else {
            (0, logService_1.addLog)("USUARIO ALTERADO", id, logService_1.dataString);
        }
    });
}
