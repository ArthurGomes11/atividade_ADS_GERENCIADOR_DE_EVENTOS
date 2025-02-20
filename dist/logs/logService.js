"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataString = void 0;
exports.addLog = addLog;
exports.listarEventoPorId = listarEventoPorId;
const database_1 = __importDefault(require("../data/database"));
const dataAtual = new Date();
exports.dataString = dataAtual.toISOString().split("T")[0];
function addLog(log_acao, usuario_id, logs_timestamp) {
    const query = `INSERT INTO logs(logs_acao, fk_usua_id, logs_timestamp) VALUES(?, ?, ?)`;
    database_1.default.run(query, [log_acao, usuario_id, logs_timestamp], (erro) => {
        if (erro) {
            console.log(`Erro ao inserir log: ${erro}`);
        }
        else {
            console.log("Log inserido com sucesso");
        }
    });
}
;
function listarEventoPorId(id_usuario) {
    const query = `SELECT * FROM logs WHERE `;
}
