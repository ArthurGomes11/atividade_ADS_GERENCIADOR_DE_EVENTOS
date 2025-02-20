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
exports.addEventoController = addEventoController;
const eventService_1 = require("../services/eventService");
const logService_1 = require("../logs/logService");
function addEventoController(nome, data, usuario_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, eventService_1.addEvento)({ nome, data, usuario_id });
            (0, logService_1.addLog)("EVENTO INSERIDO", usuario_id, logService_1.dataString);
            console.log("Evento inserido com sucesso.");
        }
        catch (error) {
            console.log("Erro ao inserir evento");
        }
    });
}
