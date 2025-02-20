"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUsuarioController = addUsuarioController;
const userService_1 = require("../services/userService");
const logService_1 = require("../logs/logService");
function addUsuarioController(nome, email, senha) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, userService_1.addusuarios)({ nome, email, senha }, (usuarioId, erro) => {
            if (erro) {
                console.error("Erro ao inserir usuário:", erro.message);
            }
            else if (usuarioId !== null) {
                (0, logService_1.addLog)("USUARIO INSERIDO", usuarioId, logService_1.dataString);
                console.log("Usuário inserido com sucesso.");
            }
        });
    });
}
