"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEvento = addEvento;
exports.listarEvento = listarEvento;
exports.deletarEvento = deletarEvento;
exports.alterarEvento = alterarEvento;
const database_1 = __importDefault(require("../data/database"));
const logService_1 = require("../logs/logService");
const EventoValidation_1 = require("../validation/EventoValidation");
function addEvento(evento) {
    const validationResult = EventoValidation_1.eventoSchema.safeParse(evento);
    const query = `INSERT INTO eventos (even_nome, even_data, fk_usua_id) VALUES (?, ?, ?)`;
    database_1.default.run(query, [evento.usuario_id, evento.nome, evento.data], (erro) => {
        if (erro) {
            console.log(`BD ERRO EVENTOS ${erro}`);
        }
        else {
        }
    });
}
;
function listarEvento() {
    const query = `SELECT * FROM eventos`;
    database_1.default.all(query, (erro, rows) => {
        if (erro) {
            console.log(`BD ERRO EVENTOS ${erro}`);
        }
        else {
            console.log(rows);
        }
    });
}
;
function deletarEvento(id) {
    const query = `DELETE  FROM eventos WHERE pk_id_even = ? `;
    database_1.default.run(query, [id], (erro) => {
        if (erro) {
            console.log(`BD ERRO EVENTOS ${erro}`);
        }
        else {
            (0, logService_1.addLog)("EVENTO DELETADO", id, logService_1.dataString);
        }
    });
}
;
function alterarEvento(id, nome, data) {
    const query = `UPDATE eventos SET usua_nome = ?,
    even_data  = ?
    WHERE pk_even_id = ?`;
    database_1.default.run(query, [nome, data, id], function (erro) {
        if (erro) {
            console.log(`BD ERRO EVENTOS ${erro}`);
        }
        else if (this.changes === 0) {
            console.log(`Evento não encontrado`);
        }
        else {
            (0, logService_1.addLog)("EVENTO ALTERADO", id, logService_1.dataString);
        }
    });
}
