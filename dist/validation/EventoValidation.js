"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventoSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.eventoSchema = zod_1.default.object({
    nome: zod_1.default.string().min(1, "O nome é obrigatório").max(100, "O nome não pode ter mais de 100 caracteres"),
    data: zod_1.default.string().refine((val) => !isNaN(Date.parse(val)), "Data inválida"),
    usuario_id: zod_1.default.number().positive("ID do usuário deve ser positivo"),
});
